const express = require('express');
const { getGates,postGate,updateGate,deleteGate } = require('../controllers/GateController');

const gateRouter = express.Router();

gateRouter.get('/gates',getGates);
gateRouter.post('/gates',postGate);
gateRouter.put('/gates',updateGate);
gateRouter.delete('/gates',deleteGate);

module.exports = gateRouter;