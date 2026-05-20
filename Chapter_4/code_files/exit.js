const http = require('http');

const server = http.createServer((req, res) =>{
    console.log(req);
    process.exit(); // To exit the event loop
});

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);
})