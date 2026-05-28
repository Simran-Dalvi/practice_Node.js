const http = require('http');

const server = http.createServer();

const POST = 3000;

server.listen(PORT, () => {
    console.log(`Server is listening at htttp://localhost:${PORT}`);
});