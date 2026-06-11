// core modules
const http = require('http');

// external modules
const express = require('express');

// local modules

const app = express();

// Adding middleware
app.use((req, res, next) => {
    console.log("Came in First middleware" ,req.url, req.method);  
    next();
});

app.use((req, res, method) => {
    console.log("came in Second middleware", req.url, req.method);
    res.send("<p>Practising Express.js</p>");
})

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`Server is listening at http://localhost:${PORT}`);
});