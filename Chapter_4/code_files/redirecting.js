const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    console.log(req.url, req.method, req.headers);
    if (req.url === "/"){
        res.setHeader('Content-type', 'text/html');
        res.write('<html lang="en">');
        res.write('<head>');
        res.write('<title>Form Detailes</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Enter your details</h1>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<label for="name">Name: </label>');
        res.write('<input type="text" id="name" placeholder="Your Full Name" name="name"><br>');
        res.write('Gender:');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" value="male" name="gender">');
        res.write(' <label for="female">Female</label>');
        res.write('<input type="radio" id="female" value="female" name="gender"><br>');
        res.write('<input type="submit" value="Click here to Submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        res.write('');
        return res.end();
    }
    // redirecting after submitting forms
    else if(req.url === "/submit-details" &&
        req.method == "POST" 
        // "method = POST "makes sure that only after submiting the form u can come to this page
    ) {
        fs.writeFileSync('user.txt', 'Simran Dalvi');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        // res.setHeader('Content-type', 'text/html');
        // res.write('<html>');
        // res.write('<head>');
        // res.write('<title> Response.js</title>')
        // res.write('</head>');
        // res.write('<body>');
        // res.write('<h1>Your form was submitted</h1>');
        // res.write('</body>');
        // res.write('</html>');
        // return res.end();
    }

    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title> Response.js</title>')
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>This is the default page.</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

const PORT = 3000;

server.listen(PORT, ()=> {
    console.log(`Server listening at http://localhost:${PORT}`);
});