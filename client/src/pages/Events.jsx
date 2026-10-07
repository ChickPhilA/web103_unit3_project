import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import LocationsAPI from '../services/LocationsAPI'
import '../css/LocationEvents.css'

const Events = () => {
    const [events, setEvents] = useState([])
    const [locations, setLocations] = useState([])
    const [selectedLocation, setSelectedLocation] = useState('all')

    useEffect(() => {
        (async () => {
            try {
                const [eventsData, locationsData] = await Promise.all([
                    EventsAPI.getAllEvents(),
                    LocationsAPI.getAllLocations()
                ])

                setEvents(eventsData.sort((a, b) => new Date(a.time) - new Date(b.time)))
                setLocations(locationsData)
            }
            catch (error) {
                console.error('Error loading events', error)
            }
        }) ()
    }, [])

    const venueName = (locationId) => {
        const location = locations.find((location) => location.id === locationId)
        return location ? location.name : ''
    }

    const filteredEvents = selectedLocation === 'all'
        ? events
        : events.filter((event) => event.location_id === Number(selectedLocation))

    return (
        <div className='location-events'>
            <header>
                <div className='location-info'>
                    <h2>All Events</h2>
                    <p>Every tournament, bracket, and watch party across our venues.</p>
                </div>

                <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                    <option value='all'>All venues</option>
                    {
                        locations.map((location) =>
                            <option key={location.id} value={location.id}>{location.name}</option>
                        )
                    }
                </select>
            </header>

            <main>
                {
                    filteredEvents.length > 0 ? filteredEvents.map((event) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            name={event.name}
                            area={event.location}
                            venue={venueName(event.location_id)}
                            time={event.time}
                            image={event.image}
                            description={event.description}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events found!'}</h2>
                }
            </main>
        </div>
    )
}

export default Events
