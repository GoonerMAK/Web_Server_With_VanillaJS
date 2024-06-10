const http = require('http');
const fs = require('fs');
const port = 4000;

const server = http.createServer((req, res) => {

    let filePath = '';
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === '/') {
        filePath = 'index.html';
    } else if (req.url === '/euro') {
        filePath = 'euro24.html';
    } else if (req.url === '/wc-t20') {
        filePath = 'world-cup-t20.html';
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
    }

    fs.readFile(filePath, (err, data) => {
        res.write(data);
        res.end();
    });

});

server.listen(port, () => {
    console.log('Server is listening on port ' + port);
});