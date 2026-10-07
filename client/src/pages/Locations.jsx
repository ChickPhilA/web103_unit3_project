import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI'
import '../css/Locations.css'

// Turns a venue name into its page path, e.g. "Card Kingdom" -> "/card-kingdom" (matches the routes in App.jsx)
const toPath = (name) => '/' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-')

const Locations = () => {
    const [locations, setLocations] = useState([])
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const [locationsData, eventsData] = await Promise.all([
                    LocationsAPI.getAllLocations(),
                    EventsAPI.getAllEvents()
                ])

                setLocations(locationsData)
                setEvents(eventsData)
            }
            catch (error) {
                console.error('Error loading locations', error)
            }
        }) ()
    }, [])

    const eventCount = (locationId) => events.filter((event) => event.location_id === locationId).length

    return (
        <div className='available-locations'>
            {
                locations.map((location) => {
                    const count = eventCount(location.id)

                    return (
                        <Link key={location.id} to={toPath(location.name)} className='location-card'>
                            <div className='location-card-image'>
                                {
                                    location.image
                                        ? <img src={location.image} alt={location.name} />
                                        : <i className="fa-solid fa-gamepad"></i>
                                }
                            </div>

                            <div className='location-card-info'>
                                <h3>{location.name}</h3>
                                <p><i className="fa-solid fa-location-dot"></i> {location.city}, {location.state}</p>
                                <p className='location-card-count'>{count} event{count === 1 ? '' : 's'}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Locations
