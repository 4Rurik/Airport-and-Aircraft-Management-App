const Aircraft = require('../models/Aircraft');
const express = require('express');

exports.getAircrafts = async (req,res) => {
    try {
        const aircrafts = await Aircraft.findAll();
        res.status(200).json(aircrafts);
    } catch (error) {
        console.error('Error while attempting to get the Aircraft.',error);
        res.status(500).json({message: 'Error while attempting to get the Aircraft.'});
    };
};

exports.postAircraft = async (req,res) => {
    try {
        const {airline,aircraft_registration,capacity,aircraft_status} = req.body;
        const newAircraft = await Aircraft.create({
            airline,
            aircraft_registration,
            capacity,
            aircraft_status
        });

        res.status(201).json(newAircraft);
    } catch (error) {
        console.error('Error while attempting to create an Aircraft.',error);
        res.status(500).json({message: 'Error while attempting to create an Aircraft.'});
    };
};

exports.updateAircraft = async (req,res) => {
    const {id} = req.params;
    try {
        const [updateRow] = await Aircraft.update(req.body, {
            where: {id}
        });

        if(updateRow === 1) {
            res.json({message: 'Aircraft successfully updated.'})
        } else {
            res.status(500).json({error: "Aircraft not found."})
        }
    } catch (error) {
        console.error('Error while attempting to update an Aircraft.',error);
        res.status(500).json({error: 'Error while attempting to update an Aircraft.'});
    };
};

exports.deleteAircraft = async (req,res) => {
    const {id} = req.params;
    try {
        const [hideRow] = await Aircraft.update({
            active: false
        },{
            where: {id}
        });

        if(hideRow === 1) {
            res.json({message: 'Aircraft succesfully deleted.'})
        }
    } catch (error) {
        console.error('Error while attempting to delete an Aircraft.');
        res.status(500).json({error: 'Error while attempting to delete an Aircraft.'});
    }
}