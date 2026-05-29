const http = require('http');
const userRequesthandler = require('./handler');

const server = http.createServer(userRequesthandler);

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is listening at htttp://localhost:${PORT}`);
});