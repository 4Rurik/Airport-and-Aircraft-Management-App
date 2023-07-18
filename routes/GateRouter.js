const express = require('express');
const { getGates,getAvailableGates,getUnavailableGates,getGateAvailability,postGate,updateGate,deleteGate,assignToGate } = require('../controllers/GateController');

const gateRouter = express.Router();

gateRouter.get('/gates',getGates);
gateRouter.get('/gates/available',getAvailableGates);
gateRouter.get('/gates/unavailable',getUnavailableGates);
gateRouter.get('/gates/:id',getGateAvailability);
gateRouter.post('/gates',postGate);
gateRouter.put('/gates/:id',updateGate);
gateRouter.delete('/gates/:id',deleteGate);
gateRouter.post('/gates/:id',assignToGate);


module.exports = gateRouter;