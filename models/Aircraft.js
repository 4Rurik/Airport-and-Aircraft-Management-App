const sequelize = require('sequelize');
const connection = require('../config/db');

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
        type: sequelize.BOOLEAN,
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = Aircraft;