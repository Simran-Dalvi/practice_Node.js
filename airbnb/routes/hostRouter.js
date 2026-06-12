const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, method) => {
    res.send(`
        <h1>Register your home</h1>
        <form action="/add-home" method="POST">
        <input type = "text" placeholder="Enter home name" name="Name">
        <input type="submit">
        </form>
        `)
})

hostRouter.post("/add-home", (req, res, method) => {
    console.log(req.body);
    res.send(`
        <h1>HOME REGISTERED SUCCESSFULLY !</h1>
        <a href="/">Go back to home</a>
        `)
})

module.exports = hostRouter