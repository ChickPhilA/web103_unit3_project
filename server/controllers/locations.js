import { pool } from '../config/database.js'

export const getLocations = async (req, res) => {
    try {
        const results = await pool.query(`
            SELECT * FROM locations ORDER BY id ASC
        `)

        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json ( { error: error.message })
    }
}

export const getLocationById = async (req, res) => {
    const query = {
        text: `SELECT * FROM locations WHERE id = $1`,
        values: [req.params.locationId]
    }

    try {
        const result = await pool.query(query)

        const location = result.rows[0]

        if(location) {
            res.status(200).json(location)
        }
        else {
            res.status(404).json({error: "Location not found!"})
        }
    }
    catch (err){
        res.status(500).json({error: err.message})
    }
}