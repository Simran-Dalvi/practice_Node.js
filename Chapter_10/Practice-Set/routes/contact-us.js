const express = require('express');
const contactRouter = express.Router();
const path = require('path');
const rootdir = require('../utils/pathHelper')

contactRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', "contact-us.html"));
})

contactRouter.post("/contact-us", (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootdir, 'views', "contactregistered.html"));
})

module.exports = contactRouter;