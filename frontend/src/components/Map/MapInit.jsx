import { useState, useEffect } from 'react';
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';

export default function MapInit() {
    const [position, setPosition] = useState({ lat: 44.8416106, lng: -0.5810938 });
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    useEffect(() => {
        // Request the user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (location) => {
                    const userPosition = {
                        lat: location.coords.latitude,
                        lng: location.coords.longitude,
                    };
                    setPosition(userPosition); // Update the position state
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        } else {
            console.warn('Geolocation is not supported by this browser.');
        }
    }, []); // Runs only once on component mount

    return (
        <div id="container" className="h-screen">
            <h1>Interactive Map</h1>

            <APIProvider
                apiKey={apiKey}
                onLoad={() => console.log('Maps API has loaded.')}
            >
                <Map
                    defaultCenter={position}
                    defaultZoom={10}
                    mapId="DEMO_MAP_ID"
                    center={position} // Update the center dynamically
                >
                    <AdvancedMarker position={position} />
                </Map>
            </APIProvider>
        </div>
    );
}
