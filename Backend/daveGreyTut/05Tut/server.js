const {logEvents: logEvents} = require('./logEvents');
const http = require('http');
const fs = require('fs');
const fsPromises = require('fs').promises;

const eventEmitter = require('events');
class Emitter extends eventEmitter{};

// initialize object
const myEmitter = new Emitter();
const path = require('path');


const port = process.env.port || 3000;

const serveFile = async (filePath, contentType, response)=>{
    try{
        const data = await fsPromises.readFile(filePath, 'utf8');
        response.writeHead(200, {'Content-Type': contentType});
        response.end(data);
    }catch(err){
        console.log(err);
        response.statusCode = 500;
        response.end();
    }
}

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method);

    const extension = path.extname(req.url);
    
    let contentType;
    //here we figure out type of file requested.
    switch(extension){
        case '.css':
            contentType = "text";
            break;
        case '.js':
            contentType = "text/javascript";
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }

    let filePath = 
        contentType ==="text/html" && req.url === '/'?
            path.join(__dirname, 'views', 'index.html'):
            contentType === "text/html" && req.url.slice(-1) ==='/'?
                path.join(__dirname, 'views', req.url, 'index.html'):
                contentType === 'text/html'?
                    path.join(__dirname, 'views', req.url):
                    path.join(__dirname, req.url);

    //makes .html extension not required  in the browser
    if(!extension && req.url.slice(-1)!=='/') filePath += '.html';

    const fileExists = fs.existsSync(filePath);
    if(fileExists){
        //serve the file
        serveFile(filePath, contentType, res);
    }else{
        //301 redirect
        switch(path.parse(filePath).base){
            case 'old-page.html':
                res.writeHead(301, {'Location': '/new-page.html'});
                res.end();
                break;
            case 'www-page.html':
                res.writeHead(301, {'Location': '/'})
                res.end();
                break;
            default:
                //serve a 404 response.
                serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res);
            }
    }
});




// add listener for log event.



// myEmitter.on('log', msg => {logEvents(msg)});

// myEmitter.emit("log", 'Log event emitted');
server.listen(port, ()=>console.log(`Server running on ${port}`));