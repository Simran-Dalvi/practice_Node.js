const express = require('express');
const contactRouter = require('./routes/contact-us');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})

app.use(express.urlencoded());
app.use(contactRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootdir, 'views', "404NotFound.html"));
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:3000`);
})