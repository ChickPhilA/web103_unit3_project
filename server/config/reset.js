// This is the file where, if the database is reset and ran in 'npm run start', 
// creates a new table and loads data from the data/arenas.js file into the database.

// NOTE: Don't forget to set the commands to run the project in @package.json.

/*
    List of fields in the gaming hub table (name still being defined):
    -id
    -name
    -location
    -event time(?)
    -image
    -description(?)
*/

import { pool } from './database.js'
import events from '../data/events.js'
import locations from '../data/locations.js'

// To create the table on every time the database is started up.
// If the table doesn't exist, will create a new one ground-up from data in the data/events.js file.

const createLocationsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS events;
        DROP TABLE IF EXISTS locations;
        CREATE TABLE IF NOT EXISTS locations(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            city VARCHAR(100) NOT NULL,
            state VARCHAR(2) NOT NULL,
            zip VARCHAR(10) NOT NULL,
            image TEXT NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log("📍 Locations table made successfully!")
    }
    catch(error) {
        console.error('⚠️ ERROR CREATING LOCATIONS TABLE', error)
    }
}

const seedLocationTable = async () => {
    await createLocationsTable()

    for (const location of locations) {
        const insertQuery = {
            text: `INSERT INTO locations (name, address, city, state, zip, image) VALUES ($1, $2, $3, $4, $5, $6)`
        }

        const values = [
            location.name,
            location.address,
            location.city,
            location.state,
            location.zip,
            location.image
        ]

        try {
            await pool.query(insertQuery, values)
            console.log(`✅ Location: ${location.name} added successfully!`)
        } catch (error) {
                console.error('⚠️ ERROR INSERTING LOCATION IN TABLE', error)
        }
    }
}

await seedLocationTable()

const createEventsTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS events(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            location VARCHAR(255) NOT NULL,
            location_id INT NOT NULL REFERENCES locations(id),
            time TIMESTAMP NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL
            )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log("👾 Events table made successfully!👾")
    }
    catch(error) {
        console.error('⚠️ ERROR CREATING EVENTS TABLE', error)
    }

}


// To insert the data in /data/events.js into the 'events' table.
const seedEventTable = async () => {
    await createEventsTable()

    // Traverses through the events data and inserts in the database.
    for (const event of events) {
        const insertQuery = {
            text: 'INSERT INTO events (name, location, location_id, time, image, description) VALUES ($1, $2, $3, $4, $5, $6)'
        }

        const values = [
            event.name,
            event.location,
            event.location_id,
            event.time,
            event.image,
            event.description
        ]

        try {
            await pool.query(insertQuery, values)
            console.log(`✅ Event: ${event.name} added successfully!`)
        } catch (error) {
            console.error('⚠️ ERROR INSERTING EVENT IN TABLE', error)
        }
    }
}

await seedEventTable()