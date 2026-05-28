const { sumRequestHandler } = require('./sum');

const requestHandler = (req, res) => {
    console.log(req.url , req.method);

    if (req.url === "/"){
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Calculator</title>
            </head>
            <body>
                <h1>Welcome to this simple Calculator</h1>
                <br><br><br>
                <a href="/calculator">Link to the Calculator</a>
            </body>
            </html>
            `);
        return res.end();
    }
    else if (req.url.toLowerCase() === "/calculator"){
        res.setHeader('Content-type', 'text/html');
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Calculator</title>
            </head>
            <body>
                <form action="/calculator-result" method="POST">
                    <input type="text" name="First" placeholder="First Number ">
                    <br> <br>
                    <input type="text" name="Second" placeholder="Second Number ">
                    <br> <br>
                    <input type="submit" value="Sum">
                </form>
            </body>
            </html>
            `)
        return res.end();
    }
    else if (req.url.toLowerCase() === "/calculator-result" && req.method == "POST"){
        return sumRequestHandler(req, res);
    }

    res.setHeader('Content-type', 'text/html');
    res.write(`
        `);
    return res.end();
};

exports.requestHandler = requestHandler;