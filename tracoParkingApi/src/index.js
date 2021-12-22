import express from "express";
import { activityCheckin, activityCheckout, removeActivity, listActivities } from "./controllers/activitiesController.js";
import { listVehicles, insertVehicles, removeVehicles, updateVehicles } from "./controllers/vehiclesControllers.js";
import { openDB } from "./database.js";

const app = express();

app.use(express.json());

app.get('/api/ping', (req, res) => {
    res.send({
        messade: 'pong'
    })
});

/* Endpoints vehicles */

app.get('/api/vehicles', listVehicles);
app.post('/api/vehicles', insertVehicles)
app.put('/api/vehicles/:id', updateVehicles)
app.delete('/api/vehicles/:id', removeVehicles)

/* ENDPOINTS activities */

app.post('/api/activities/checkin', activityCheckin)
app.put('/api/activities/checkout', activityCheckout)
app.delete('/api/activities/:id', removeActivity)
app.get('/api/activities', listActivities)

app.listen(8000, () => { 
    console.log("Working! Port: 8000")
})