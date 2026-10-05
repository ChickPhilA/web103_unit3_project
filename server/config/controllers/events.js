// This file helps us perform CRUD operations from the 'events' table in our database.
// To make it make sense: data already exists in our table... so let's read, edit, add, or delete to it.

import { pool } from '../database.js'

export const getEvents = async (req, res) => {
    try {
        const results = pool.query(`
            SELECT * FROM events ORDER BY id ASC
        `)

        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json ( { error: error.message })
    }
}

export const getEventById = async (req, res) => {
    const query = {
        text: `SELECT * FROM events WHERE id = $1`,
        values: [req.params.eventId]
    }

    try {
        const result = await pool.query(query)

        const event = result.rows[0]

        if(event) {
            res.status(200).json(event)
        }
        else {
            res.status(404).json({error: "Event not found!"})
        }
    }
    catch (err){
        res.status(500).json({error: err.message})
    }
}

export default {
    getEvents
}