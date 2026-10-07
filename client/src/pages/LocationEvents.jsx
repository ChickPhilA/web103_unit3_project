import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI'
import '../css/LocationEvents.css'

const LocationEvents = ({index}) => {
    const [location, setLocation] = useState({})
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const locationData = await LocationsAPI.getLocationsById(index)
                setLocation(locationData)

                // Only keep the events happening at this location, soonest first.
                const eventsData = await EventsAPI.getAllEvents()
                const locationEvents = eventsData
                    .filter((event) => event.location_id === index)
                    .sort((a, b) => new Date(a.time) - new Date(b.time))
                setEvents(locationEvents)
            }
            catch (error) {
                console.error('Error loading location events', error)
            }
        }) ()
    }, [index])

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    {location.image && <img src={location.image} alt={location.name} />}
                </div>

                <div className='location-info'>
                    <h2>{location.name} </h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            name={event.name}
                            area={event.location}
                            time={event.time}
                            image={event.image}
                            description={event.description}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents
