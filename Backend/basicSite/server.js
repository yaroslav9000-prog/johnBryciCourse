const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

http.createServer((req, res)=>{
    
    fs.readFile(path.join(__dirname, 'Pages', "index.html"), (err, data)=>{
        if(err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
    
    
}).listen(port);