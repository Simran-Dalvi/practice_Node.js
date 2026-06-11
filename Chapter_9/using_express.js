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