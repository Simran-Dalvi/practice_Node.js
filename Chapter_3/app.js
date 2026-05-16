const http = require('http');

// function requestListner(req, res){
//     console.log(req);
// }

const server = http.createServer((req, res) => {
    console.log(req);
});

// lets gits it a port to listen to:
const PORT = 3000;

// now listen from this port
server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
});