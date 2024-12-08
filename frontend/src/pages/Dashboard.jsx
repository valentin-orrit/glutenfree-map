import { useState } from 'react'
import DisplayUsers from '../components/Dashboard/DisplayUsers'
import DisplayCities from '../components/Dashboard/DisplayCities'
import DisplayPlaces from '../components/Dashboard/DisplayPlaces'
import DisplayFavorites from '../components/Dashboard/DisplayFavorites'

export default function Dashboard() {
    const [visibleTables, setVisibleTables] = useState({
        users: false,
        cities: false,
        places: false,
        favorites: false,
    })

    const toggleTable = (table) => {
        setVisibleTables((prev) => ({
            ...prev,
            [table]: !prev[table],
        }))
    }

    return (
        <div className="flex flex-col align-middle justify-center mx-20">
            <h1 className="text-8xl font-bold mb-8">Dashboard</h1>

            {/* Users Dropdown */}
            <div className="w-full mb-4">
                <button
                    onClick={() => toggleTable('users')}
                    className="flex justify-between items-center w-full border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none"
                >
                    <span>Users</span>
                    <span
                        className={`transform transition-transform duration-200 ${
                            visibleTables.users ? 'rotate-180' : 'rotate-0'
                        }`}
                    >
                        ▼
                    </span>
                </button>
                {visibleTables.users && <DisplayUsers />}
            </div>

            {/* Cities Dropdown */}
            <div className="w-full mb-4">
                <button
                    onClick={() => toggleTable('cities')}
                    className="flex justify-between items-center w-full border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none"
                >
                    <span>Cities</span>
                    <span
                        className={`transform transition-transform duration-200 ${
                            visibleTables.cities ? 'rotate-180' : 'rotate-0'
                        }`}
                    >
                        ▼
                    </span>
                </button>
                {visibleTables.cities && <DisplayCities />}
            </div>

            {/* Places Dropdown */}
            <div className="w-full mb-4">
                <button
                    onClick={() => toggleTable('places')}
                    className="flex justify-between items-center w-full border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none"
                >
                    <span>Places</span>
                    <span
                        className={`transform transition-transform duration-200 ${
                            visibleTables.places ? 'rotate-180' : 'rotate-0'
                        }`}
                    >
                        ▼
                    </span>
                </button>
                {visibleTables.places && <DisplayPlaces />}
            </div>

            {/* Favorites Dropdown */}
            <div className="w-full mb-4">
                <button
                    onClick={() => toggleTable('favorites')}
                    className="flex justify-between items-center w-full border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none"
                >
                    <span>Favorites</span>
                    <span
                        className={`transform transition-transform duration-200 ${
                            visibleTables.favorites ? 'rotate-180' : 'rotate-0'
                        }`}
                    >
                        ▼
                    </span>
                </button>
                {visibleTables.favorites && <DisplayFavorites />}
            </div>
        </div>
    )
}
