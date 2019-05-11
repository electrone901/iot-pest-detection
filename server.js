const express = require('express');
const app = express();
const port = 3000;
const dataRoutes = require("./routes/data");

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
})

app.use('/', dataRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))