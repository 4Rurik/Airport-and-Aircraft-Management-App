const connection = require('./config/db');
const express = require('express');
const bodyParser = require('body-parser');
const aircraftRouter = require('./routes/AircraftRouter');
const gateRouter = require('./routes/GateRouter');
const cors = require('cors');

const port = 4000;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(aircraftRouter);
app.use(gateRouter);

connection.sync().then(() => {
    console.log("Application successfully synched.");
    app.listen(port, () => {
        console.log(`Server initialized in ports ${port}`);
    });
});