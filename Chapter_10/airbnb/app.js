const path = require(`path`);
const express = require('express');

const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootdir = require("./utils/pathUtil");

const app = express();

app.use((req, res, next) =>{
    console.log(req.url, req.method);
    next();
})
app.use(express.urlencoded());

app.use(userRouter);

app.use("/host", hostRouter);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(rootdir,"views", "404NotFound.html"));
})
const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server listening at http://localhost:${PORT}`);
});