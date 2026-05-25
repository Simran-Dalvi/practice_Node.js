const http = require('http');
// const fs = require('fs');
const {requestHandler} = require('./handler')

const server = http.createServer(requestHandler);

const PORT = 5000;

server.listen(PORT, ()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);
});