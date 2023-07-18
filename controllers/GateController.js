const Gate = require('../models/Gate');
const Aircraft = require('../models/Aircraft');

exports.getGates = async (req,res) => {
    try {
        const gates = await Gate.findAll({
            include: [Aircraft]
        });

        res.status(200).json(gates);
    } catch (error) {
        console.error('Error while attempting to get the Gate.',error);
        res.status(500).json({message: 'Error while attempting to get the Gate.'});
    }
}

exports.getAvailableGates = async (req,res) => {
    try {
        const gatesA = await Gate.findAll({
            include: [{
                model: Aircraft,
                where: {availability: true}
            }]
        });

        res.status(200).json(gatesA);
    } catch (error) {
        console.error('Error while attempting to get the Gate.',error);
        res.status(500).json({message: 'Error while attempting to get the Gate.'});
    }
}

exports.getUnavailableGates = async (req,res) => {
    try {
        const gatesU = await Gate.findAll({
            include: [{
                model: Aircraft,
                where: {availability: false}
            }]
        });

        res.status(200).json(gatesU);
    } catch (error) {
        console.error('Error while attempting to get the Gate.',error);
        res.status(500).json({message: 'Error while attempting to get the Gate.'});
    }
}

exports.postGate = async (req,res) => {
    try {
        const {gate,availability,aircraft_id} = req.body;
        const newGate = await Gate.create({
            gate,
            availability,
            aircraft_id
        });
        res.status(201).json(newGate);
    } catch (error) {
        console.error('Error while attempting to create a Gate.',error);
        res.status(500).json({message: 'Error while attempting to create a Gate.'});
    }
}