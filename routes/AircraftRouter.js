const express = require('express');
const { getAircrafts,postAircraft,updateAircraft,deleteAircraft } = require('../controllers/AircraftController');

const aircraftRouter = express.Router();

aircraftRouter.get('/aircrafts',getAircrafts);
aircraftRouter.post('/aircrafts',postAircraft);
aircraftRouter.put('/aircrafts/:id',updateAircraft);
aircraftRouter.delete('/aircrafts/:id',deleteAircraft);

module.exports = aircraftRouter;