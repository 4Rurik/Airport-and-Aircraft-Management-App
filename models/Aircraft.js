const sequelize = require('sequelize');
const connection = require('../config/db');
const Gate = require('./Gate');

const Aircraft = connection.define('Aircraft', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    airline: {
        type: sequelize.STRING,
        allowNull: false
    },
    aircraft_registration: {
        type: sequelize.STRING,
        allowNull: false
    },
    capacity: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    aircraft_status: {
        type: sequelize.STRING,
        allowNull: false
    },
    active: {
        type: sequelize.BOOLEAN
    }
});

Aircraft.belongsTo(Gate, {
    foreignKey: 'aircraft_id'
});

module.exports = Aircraft;