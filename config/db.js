const Sequelize = require('sequelize');

const connection = new Sequelize(
    'airportmgmt',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = connection;