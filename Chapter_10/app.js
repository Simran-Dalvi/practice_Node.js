const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use("/", (req, res, next) => {
    console.log(req.url, req.method);
    next();
})

app.get("/", (req, res, next) => {
    res.send("<h1>This is the root page.</h1>");
})

app.get("/contact-us", (req, res, next) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Us</title>
        </head>
        <body>
            <h1>CONTACT US form</h1>
            <form action="/contact-us" method="POST">
                <table padd>
                    <tr>
                        <td><label for="name">Name</label></td>
                        <td><input type="text" id="name" placeholder="Enter name here" name="name"></td>
                    </tr>
                    <tr>
                        <td><label for="email">Email ID</label></td>
                        <td><input type="email" id="email" placeholder="Enter email here" name="email"></td>
                    </tr>
                    <tr>
                    <td colspan="2" align="center"> 
                            <input type="submit">
                        </td>
                    </tr>
                </table>
            </form>
        </body>
        </html>
        `);
})

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
    console.log(req.body);
    res.send("<p>We will contact you shortly</p>");
});

const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server is listening at http://localhost:${PORT}`);
})