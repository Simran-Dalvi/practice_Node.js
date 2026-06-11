Starting with Express.js

9.1 What is Express.js

1. Express.js is a minimal and flexible web application framework for Node.js
2. It provides a robust set of features for building single-page, multi-page, and hybrid web applications.
3. Express.js simplifies server-side coding by providing a layer of fundamental web application features.

9.2 Need of Express.js

1. Express.js simplifies server creation: Helps in quickly setting up and running a web server without the need for complex coding.
2. Routing Management : Provides a powerful routing mechanism to handle URLs and HTTP methods effectively.
3. Middleware Support: Allows the use of middleware to handle requests, responses, and any middle operations, making code modular and maintainable.
4. API Development : Facilitates easy and efficient creation of RESTful APIs.
5. Community and Plugins: Has a large ecosystem with numerous plugins and extensions, accelerating develoopment time.

9.3 Installing Express.js

npm install express

To install express temporarily and not add it to the dependencies list:

npm install express --no-save

```javascript
// core modules
const http = require('http');

// external modules
const express = require('express');

// local modules

const app = express();

const server = http.createServer(app);

const PORT = 3000;

server.listen(PORT, () =>{
    console.log(`Server is listening at http://localhost:${PORT}`);
});
```

9.4 Adding Middleware

![image](/images/img27.png)

```javascript
// Adding middleware
app.use((req, res, next) => {
  console.log("Came in First middleware" ,req.url, req.method);  
  next();
});

app.use((req, res, method) => {
    console.log("came in Second middleware", req.url, req.method);
})
```

![image](/images/img28.png)

9.5 Sending Response

```javascript
app.use((req, res, method) => {
    console.log("came in Second middleware", req.url, req.method);
    res.send("<p>Practising Express.js</p>");
})
```

![image](/images/img28.png)

Sets the content type on it's own.

9.6 Express DeepDive

[Package on Github](https://github.com/expressjs/express/blob/master/lib)

Using app to listen to all request and responses instead of server:

```javasscript

const express = require('express');

app = express();

app.use((req, res, next) =>{
    console.log("At the First Middleware", req.url, req.method);
    next();
})

app.use((req, res, next) => {
    console.log("At the second middleware", req.url, req.method);
    res.send("<p>Practising Express.js</p>")
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
} )
```

[Official express site](https://expressjs.com/en/)

![image](/images/img30.png)

9.7 Handling Routes

1. Order matters
2. Can not call next() after send()
3. "/" matches everything
4. Calling res.send implicitly calls res.end()

```javascript
const express = require('express');

app = express();

app.use("/" ,(req, res, next) =>{
    console.log("At the First Middleware", req.url, req.method);
    // res.send("<h1>On the / page</h1>");
    next();
})

app.use("/", (req, res, next) => {
    console.log("At the First(2) Middleware", req.url, req.method)
    res.send("<h1>Trying / again</h1>");
})

app.use("/submit-details", (req, res, next) => {
    console.log("At the second middleware", req.url, req.method);
    res.send("<p>Practising Express.js</p>")
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
} )
```

![image](/images/img31.png)

.use() is like a wildcard, while, .get() and .post() matches the exact url.

```javascript
const express = require('express');

app = express();

app.get("/" ,(req, res, next) =>{
    console.log("At the First Middleware", req.url, req.method);
    res.send("<h1>On the / page</h1>");
    // next();
})

app.post("/submit-details", (req, res, next) => {
    console.log("At the second middleware", req.url, req.method);
    res.send("<p>Practising Express.js, Submit - details page</p>")
})

app.use("/", (req, res, next) => {
    console.log("At the First(2) Middleware", req.url, req.method)
    res.send("<h1>Trying / again</h1>");
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
} )
```