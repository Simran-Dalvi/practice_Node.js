const express = require('express');
const path = require('path');
const rootdir = require('../utils/pathHandler');

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) =>{
    res.sendFile(path.join(rootdir, 'views', 'add-home.html'))
});

hostRouter.post("/add-home", (req, res, next) =>{
    res.sendFile(path.join(rootdir, 'views', 'registered.html'))
})

module.exports = hostRouter;