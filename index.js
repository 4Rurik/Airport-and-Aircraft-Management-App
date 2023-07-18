const connection = require('./config/db');
const express = require('express');
const bodyParser = require('body-parser');
const {getAircrafts,postAircraft,updateAircraft,deleteAircraft} = require('./controllers/AircraftController');

const port = 3000;
const app = express();

app.use(bodyParser.json());

app.get('/aircrafts',getAircrafts);
app.post('/aircrafts',postAircraft);
app.put('/aircrafts/:id',updateAircraft);
app.delete('/aircrafts/:id',deleteAircraft);

connection.sync().then(() => {
    console.log("Application successfully synched.");
    app.listen(port, () => {
        console.log(`Server initialized in ports ${port}`);
    });
});