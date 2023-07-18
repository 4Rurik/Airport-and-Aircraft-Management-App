const express = require('express');
const { getAircrafts,postAircraft,updateAircraft,deleteAircraft } = require('../controllers/AircraftController');

const aircraftRouter = express.Router();

aircraftRouter.get('/aircrafts',getAircrafts);
aircraftRouter.post('/aircrafts',postAircraft);
aircraftRouter.put('/aircrafts',updateAircraft);
aircraftRouter.delete('/aircrafts',deleteAircraft);

module.exports = aircraftRouter;