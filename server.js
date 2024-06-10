const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 4000;

const server = http.createServer((req, res) => {

    if(req.method === 'GET')
    {
        let filePath = '';
        let contentType = '';

        if (req.url === '/') {
            filePath = 'index.html';
            contentType = 'text/html';
        } else if (req.url === '/euro') {
            filePath = 'euro24.html';
            contentType = 'text/html';
        } else if (req.url === '/wc-t20') {
            filePath = 'world-cup-t20.html';
            contentType = 'text/html';
        } else if (req.url === '/styles.css') {
            filePath = 'styles.css';
            contentType = 'text/css';
        } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.write("404 Page Not Found");
            res.end();
            return;
        }

        fs.readFile(filePath, (err, data) => {
            if(err)
            {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.write("500 Internal Server Error");
                res.end();
                return;
            }

            res.writeHead(200, { "Content-Type": contentType });
            res.write(data);
            res.end();
        });
    }

    else if( req.method === 'POST'  &&  req.url === '/euro')
    {
        let body = '';
        req.on('data', (data) => {
            body += data.toString();
        });

        req.on('end', () => {
            const formData = new URLSearchParams(body);
            console.log(formData);
            const matchup = formData.get('matchup');
            const date = formData.get('date');

            fs.readFile('euro24.html', (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.write("500 Internal Server Error");
                    res.end();
                    return;
                }

                let updatedHtml = data.toString().replace('<!-- <li></li> -->', `<li>${matchup} - ${date}</li><!-- <li></li> -->`);

                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(updatedHtml);
                res.end()
            });
        });
    }

});

server.listen(port, () => {
    console.log('Server is listening on port ' + port);
});