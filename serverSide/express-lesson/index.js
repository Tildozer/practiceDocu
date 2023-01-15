const express = require('express');
const server = express();

const bodyParser = require('body-parser');

server.use(bodyParser.json());

server.use((req, res, next) => {
    console.log("body is now", req.body);
});

const appRouter = require('./routes');

server.use('/app', appRouter);

server.get('/hello', function (req, res, next) {
    res.send('hello there');
});

server.listen(3000, () => {
    console.log('server is up!');
});
