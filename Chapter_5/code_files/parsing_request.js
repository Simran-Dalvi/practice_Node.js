const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    console.log(req.url, req.method);
    if (req.url === "/"){
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Form Detailes</title>
            </head>
            <body>
                <h1>Enter your details</h1>
                <form action="/submit-details" method = "POST">
                    <label for="name">Name: </label>
                    <input type="text" id="name" placeholder="Your Full Name" name="name">
                    <br>
                    Gender: 
                    <label for="male">Male</label>
                    <input type="radio" id="male" value="male" name="gender">
                    <label for="female">Female</label>
                    <input type="radio" id="female" value="female" name="gender">
                    <br>
                    <input type="submit" value="Click here to Submit">
                </form>
            </body>
            </html>
        `)
        return res.end();
    }
    else if(req.url ==="/submit-details" && req.method == "POST"){
        const body =[];
        req.on('data', (chunks) =>{
            body.push(chunks);
        });
        req.on('end', () => {
            const inpt = Buffer.concat(body).toString();
            const params = new URLSearchParams(inpt);
            const bodyObject = Object.fromEntries(params);
            console.log(bodyObject);
            fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
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
    return res.end();
});

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);
});