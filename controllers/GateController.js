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
            where: {
                availability: true
            }
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
                where: {aircraft_status: 'On Gate'}
            }],
            where: {
                availability: false
            }
        });

        res.status(200).json(gatesU);
    } catch (error) {
        console.error('Error while attempting to get the Gate.',error);
        res.status(500).json({message: 'Error while attempting to get the Gate.'});
    }
}

exports.getGateAvailability = async (req,res) => {
    const {id} = req.params;
    try {
        const gate = await Gate.findByPk(id);

        if (gate.availability) {
            res.json({
                name: gate.gate,
                availability: gate.availability
            });
        } else {
            res.json({ message: 'This Gate is currently unavailable.'})
        }
    } catch (error) {
        console.error('Error while attempting to get the availability of the Gate.', error);
        res.status(500).json({error: 'Error while attempting to get the availability of the Gate.'})
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

exports.updateGate = async (req,res) => {
    const {id} = req.params;
    try {
        const [updateRow] = await Gate.update(req.body, {
            where: {id}
        });

        if(updateRow === 1) {
            res.json({message: 'Gate successfully updated.'})
        } else {
            res.status(500).json({error: "Gate not found."})
        }
    } catch (error) {
        console.error('Error while attempting to update a Gate.',error);
        res.status(500).json({error: 'Error while attempting to update a Gate.'});
    };
};

exports.deleteGate = async (req,res) => {
    const {id} = req.params;
    try {
        const [hideRow] = await Gate.update({
            active: false
        },{
            where: {id}
        });

        if(hideRow === 1) {
            res.json({message: 'Gate succesfully deleted.'})
        }
    } catch (error) {
        console.error('Error while attempting to delete a Gate.');
        res.status(500).json({error: 'Error while attempting to delete a Gate.'});
    };
};

exports.assignToGate = async (req,res) => {
    const {id} = req.params;
    try {
        const gate = await Gate.findByPk(id);

        if(gate.availability) {
            const {aircraft_id} = req.body;
            gate.aircraft_id = aircraft_id;
            gate.availability = false;

            await gate.save();
            res.json({message: "Aircraft has been successfully assigned to the Gate."});
        } else {
            res.status(500).json({nessage: "Gate is currently unavailable."});
        }
    } catch (error) {
        console.error('Error while attempting to assign an Aircraft to a Gate.',error);
            res.status(500).json({error: 'Error while attempting to assign an Aircraft to a Gate.'});
    };
};