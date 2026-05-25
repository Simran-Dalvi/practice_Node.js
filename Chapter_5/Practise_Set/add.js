const sum = (req, res) =>{
    const body = [];
        req.on('data', chunks => body.push(chunks));
        req.on('end', ()=>{
            const inpt = Buffer.concat(body).toString();
            const params = new URLSearchParams(inpt);
            const bodyObject = Object.fromEntries(params);
            const total = Number(bodyObject.First) + Number(bodyObject.Second);
            console.log(total);
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
                    <h1>Your Result is : ${total} </h1>
                </body>
                </html>
                `);
            return res.end();
        });
        // res.statusCode = 302;
        
}

module.exports = sum;