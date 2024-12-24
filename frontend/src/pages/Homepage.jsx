import MapInit from '../components/Map/MapInit'
import LogoLight from '../assets/eat-around-logo-light.svg'

export default function Home() {
    return (
        <div className="">
            <div
                id="title"
                className="flex justify-center items-center mt-12 mb-4"
            >
                <img
                    src={LogoLight}
                    alt="eat around logo"
                    className="w-20 mr-2 mb-2"
                />
                <div id="title-text" className="flex items-end">
                    <h1 className="text-4xl font-extrabold mr-2">Eat Around</h1>
                    <p className="text-sm pb-1">
                        find your next{' '}
                        <span className="text-eaorange">favorite</span> place!
                    </p>
                </div>
            </div>

            <div id="map" className="min-w-full">
                <MapInit />
            </div>

            <div id="cards"></div>
        </div>
    )
}
