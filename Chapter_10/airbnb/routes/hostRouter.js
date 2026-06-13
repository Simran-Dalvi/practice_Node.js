const path = require('path');
const express = require('express');
const hostRouter = express.Router();
const rootdir = require("../utils/pathUtil")

console.log("hostRouterLoaded");

hostRouter.get("/add-home", (req, res, method) => {
    res.sendFile(path.join(rootdir,'views','add-home.html'));
})

hostRouter.post("/add-home", (req, res, method) => {
    console.log(req.body);
    res.sendFile(path.join(rootdir, 'views/homeRegistered.html'));
})

module.exports = hostRouter