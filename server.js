const http = require('http');
const fs = require('fs');
const port = 4000;

const server = http.createServer((req, res) => {
    
    res.writeHead(200, { "Content-Type": "text/html" });

    fs.readFile('index.html', (err, data) => {
        res.write(data);
        res.end();
    });

});

server.listen(port, () => {
    console.log('Server is listening on port ' + port);
});