const http = require('http');
const port = 3000;
const url = require('url');
const fs = require('fs');


http.createServer((req, res) => {
    fs.readFile('./index.html', (err,data)=>{
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        res.
    })
    

});

server.listen(port);

