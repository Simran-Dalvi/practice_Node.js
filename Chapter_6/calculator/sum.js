const sumRequestHandler = (req, res) =>{
    console.log("1. In the Sum Request Handler");
    const body = [];
    let result;
    req.on('data', (chunks) =>{body.push(chunks);
        console.log("2. Chunking done");
    });
    req.on('end', ()=>{
        const inpt = Buffer.concat(body).toString();
        const param = new URLSearchParams(inpt);
        const objt = Object.fromEntries(param);
        result = Number(objt.First) + Number(objt.Second);
        console.log("result");
        console.log("3. Found the result"); 
    });
    console.log("4. Result as response");
    res.setHeader('Location', '/');
        res.statusCode = 302;
        res.write(`
             <html>
            <head><title>Practise Set</title></head>
            <body>
                <h1>Your Sum is ${result}</h1>
            </body>  
            <html>  
            `)
        return res.end();
};

exports.sumRequestHandler = sumRequestHandler;