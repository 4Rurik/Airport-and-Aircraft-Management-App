const sequelize = require('sequelize');
const connection = require('../config/db');
const Aircraft = require('./Aircraft');

const Gate = connection.define('Gate', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gate: {
        type: sequelize.BOOLEAN,
        allowNull: false,
    },
    aircraft_id: {
        type: sequelize.INTEGER,
        allowNull: true
    }
},{
    timestamps: false
});

Gate.hasOne(Aircraft, {
    foreignKey: 'aircraft_id'
});

module.exports = Gate;