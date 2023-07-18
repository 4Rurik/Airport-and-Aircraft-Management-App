const connection = require('./config/db');
const express = require('express');
const bodyParser = require('body-parser');
const aircraftRouter = require('./routes/AircraftRouter');

const port = 3000;
const app = express();

app.use(bodyParser.json());

app.use(aircraftRouter);

connection.sync().then(() => {
    console.log("Application successfully synched.");
    app.listen(port, () => {
        console.log(`Server initialized in ports ${port}`);
    });
});