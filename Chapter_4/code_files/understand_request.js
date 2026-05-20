const http = require('http');

const server = http.createServer((req,res) => {
    console.log("URL", req.url);
    console.log("Method", req.method);
    console.log("Headers", req.headers);

})

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`listening at http://localhost:${PORT}`);
})