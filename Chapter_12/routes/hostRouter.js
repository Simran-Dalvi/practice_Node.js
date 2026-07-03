const express = require('express');
const path = require('path');
const rootdir = require('../utils/pathHandler');

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) =>{
    res.sendFile(path.join(rootdir, 'views', 'add-home.html'));
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) =>{
    console.log(`Home Registration successful for`,req.body, req.body.houseName);
    registeredHomes.push({houseName: req.body.houseName});
    res.sendFile(path.join(rootdir, 'views', 'registered.html'));

})

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;