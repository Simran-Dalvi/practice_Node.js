const fs = require('fs');

const userRequesthandler = (req, res) => {
    console.log(req.url, req.method);

    if (req.url === "/"){
        res.setHeader('Content-Type', 'text/html');
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
                    <input type="radio" id="female" value="Female" name="gender">
                    <br>
                    <input type="submit" value="Click here to Submit">
                </form>
            </body>
            </html>
            `);
        return res.end();
    }
    else if (req.url.toLowerCase() === "/submit-details" && req.method == "POST"){
        const body = [];
        req.on('data', chunks =>{
            body.push(chunks);
        })
        req.on('end', ()=>{
            const inpt = Buffer.concat(body).toString();
            const params = new URLSearchParams(inpt);
            const objectBody = Object.fromEntries(params);

            fs.writeFile("user.txt", JSON.stringify(objectBody), error =>{
                console.log("Data wriiten successfully");
            });
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
        
    }

    else {
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
    }
}

module.exports = userRequesthandler