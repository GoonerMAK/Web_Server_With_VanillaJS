const http = require('http');
const fs = require('fs');
const port = 4000;

const server = http.createServer((req, res) => {
    res.write('Hello There');
    res.statusCode = 200;
    res.end();
});

server.listen(port, () => {
    console.log('Server is listening on port ' + port);
});