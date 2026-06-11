const express = require('express');

app = express();

app.use("/" ,(req, res, next) =>{
    console.log("At the First Middleware", req.url, req.method);
    // res.send("<h1>On the / page</h1>");
    next();
})

app.post("/submit-details", (req, res, next) => {
    console.log("At the second middleware", req.url, req.method);
    res.send("<p>Practising Express.js</p>")
})

app.use("/", (req, res, next) => {
    console.log("At the First(2) Middleware", req.url, req.method)
    res.send("<h1>Trying / again</h1>");
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
} )