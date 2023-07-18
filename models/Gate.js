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
        type: sequelize.STRING,
        allowNull: false
    },
    availability: {
        type: sequelize.BOOLEAN,
        allowNull: false
    },
    aircraft_id: {
        type: sequelize.INTEGER,
        allowNull: true
    }
},{
    timestamps: false
});

Aircraft.hasOne(Gate, {
    foreignKey: 'id'
});

Gate.belongsTo(Aircraft, {
    foreignKey: 'aircraft_id'
});

Gate.prototype.isAvailable = () => {
    if(this.availability) {
        return "Available.";
    }
}

module.exports = Gate;