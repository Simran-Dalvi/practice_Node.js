const express = require('express');
const path = require('path');
const rootdir = require('../utils/pathHandler');
const {registeredHomes} = require('./hostRouter');

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
    console.log('Hose name is:', registeredHomes);
    res.sendFile(path.join(rootdir, 'views', 'home.html'));
})

module.exports = userRouter;