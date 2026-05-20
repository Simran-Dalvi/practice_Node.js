const http = require('http');

const server = http.createServer((req, res) => {
    // res.setHeader('Content-type', 'json');
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title> Response.js</title>')
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>This is the heading</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
});