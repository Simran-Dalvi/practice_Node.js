Express.js DeepDive

10.1 Parsing Requests
Can use external module 'body-parser' to parse the data
`npm install body-parser --save`

```javascript
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
    console.log(req.body);
    res.send("<p>We will contact you shortly</p>");
});
```
```bash
[nodemon] starting `node app.js`
Server is listening at http://localhost:3000
/ GET
/contact-us GET
/contact-us POST
{ name: 'Simran Dalvi', email: 'simran2003.dalvi@gmail.com' }
```

or use express method `urlencoded()`:

```javascript
app.use(express.urlencoded());


app.post("/add-home", (req, res, method) => {
    console.log(req.body);
    res.send(`
        <h1>HOME REGISTERED SUCCESSFULLY !</h1>
        <a href="/">Go back to home</a>
        `)
})

```

10.2 Express Router

As an Express application grows, putting all routes inside app.js makes the file large and difficult to manage. To keep the code organized, routes are separated into different files using Express Routers. This follows the principle of separation of concerns, where each file handles a specific part of the application.

Express provides the `Router()` method to create a mini Express application that handles routes independently.

```javascript
const express = require('express');
const userRouter = express.Router();
```

The router object works similarly to the main app object. We can define routes on it using methods such as get(), post(), put(), and delete().

```javascript
userRouter.get("/", (req, res, next) => {
    res.send(`
        <h1>Welcome to airbnb</h1>
        <a href = "/add-home">Add Home</a>
        `);
})
```
After defining the routes, the router is exported so it can be used in other files.

`module.exports = userRouter`

The router file is imported into app.js.:
```javascript
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

app.use(userRouter);
app.use(hostRouter);
```
keeping our code modular.

10.3 Adding 404
10.4 Common Paths
10.5 Adding HTML Files
10.6 Serving HTML Files
10.7 Using File Helper