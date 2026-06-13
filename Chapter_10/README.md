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

Add this at the end of all your routes in app.js:

```javascript
app.use((req, res, next)=>{
    res.status(404).send(`<h1>Oops! 404: Page not Found ;-(</h1>`);
})
```
to show all the routes that do not exist.

10.4 Common Paths

When multiple routes share the same starting URL segment, Express allows us to define a common path while registering the router. This avoids repeating the same path in every route definition and keeps the code cleaner.

In app.js, a common path can be attached to a router using app.use().

`app.use("/host", hostRouter);`

Here, /host becomes the common path (or route prefix) for all routes defined inside hostRouter.

When a request is made to:

`http://localhost:3000/host/add-home`

Express checks the registered routes.

1. It finds that /host is handled by hostRouter.
2. Express removes the matching part (/host) internally.
3. The remaining path (/add-home) is passed to the router.
4. The router finds the matching route handler and executes it.

Using common paths provides better organization by grouping related routes under a single URL prefix.

10.5 Adding HTML Files

Instead of sending HTML directly through res.send(), it is better to store HTML pages in separate files. This keeps the JavaScript code clean and makes the HTML easier to manage.

A common convention in Express applications is to create a views folder.

Project structure:

```bash
project/
│
├── app.js
├── routes/
│   └── hostRouter.js
│
├── views/
│   ├── home.html
│   └── add-home.html
│
└── package.json
```

The views folder contains all HTML files that will be sent to the client.

10.6 Serving HTML Files

Node.js provides a built-in module called path that helps work with file and folder paths.

Importing the module:

`const path = require('path');`

The path module creates correct file paths regardless of the operating system (Windows, Linux, or macOS).

Express provides the sendFile() method to send files.

```javascript
const path = require(`path`);
const express = require('express');
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", 'home.html'));
})

module.exports = userRouter
```

__dirname is a global variable provided by Node.js.

It contains the absolute path of the current file's directory.

path.join() combines path segments into a valid file path.


10.7 Using File Helper
When an application grows, many route files may need access to the project's root directory. Writing the full path logic repeatedly can become cumbersome. To solve this, we create a file helper utility.

Create a utility file:
```bash
project/
│
├── utils/
│   └── pathUtil.js
```
pathUtil.js
```javascript
const path = require('path');

module.exports = path.dirname(require.main.filename);
```
The helper exports the project's root path:

```javascript
const path = require('path');
const rootdir = require('./utils/pathUtil');

app.use((req, res, next) => {
    res.status(404).sendFile(
        path.join(rootdir, "views", "404NotFound.html")
    );
});
```