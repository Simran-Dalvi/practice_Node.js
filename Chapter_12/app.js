const express = require('express');
const path = require('path');
const userRouter = require('./routes/userRouter');
const rootdir = require('./utils/pathHandler');
const {hostRouter} = require('./routes/hostRouter');

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

app.use(express.static(path.join(rootdir, 'public')));

app.use(express.urlencoded());

app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootdir, 'views', '404NotFound.html'));
})

const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server is listening at http://localhost:${PORT}`)
});