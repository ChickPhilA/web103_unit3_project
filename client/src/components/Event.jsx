import React from 'react'
import { formatDate, formatTime, formatRemainingTime } from '../utils/dates'
import '../css/Event.css'

const Event = ({ id, name, area, venue, time, image, description }) => {
    const remaining = formatRemainingTime(time)

    return (
        <article className='event-information'>
            <img src={image} alt={name} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{name}</h3>
                    <p><i className="fa-solid fa-location-dot"></i> {area}{venue && ` @ ${venue}`}</p>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {formatDate(time)} <br /> {formatTime(time)}</p>
                    <p className='event-description'>{description}</p>
                </div>
            </div>

            {
                remaining
                    ? <p id={`remaining-${id}`} className='time-remaining'>{remaining}</p>
                    : <p id={`remaining-${id}`} className='negative-time-remaining'>Event has passed</p>
            }
        </article>
    )
}

export default Event
