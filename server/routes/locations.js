import express from 'express'
import { getLocations, getLocationById } from '../controllers/locations.js'

const router = express.Router()

// define routes to get events and locations
router.get('/', getLocations)

router.get('/:locationId', getLocationById)

export default router