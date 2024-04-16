const express = require('express');
const app = express();
const path = require('path');
const {logger} = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3500;
const cors = require('cors');
//Custom middleware logger.
app.use(logger);
// Cross Origin Resource sharing
const whitelist = ['http://www.mysite.com', 'http://127.0.0.1:5000', 'http://localhost:3500'];
const corsOptions = {
    origin: (origin, callback)=>{
        if(whitelist.indexOf(origin) !== -1 || !origin){
            callback(null,true);
        }else{
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus : 200
}
app.use(cors(corsOptions));

app.use((express.urlencoded({extended: false})));

app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

app.get('^/$|/index(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname });
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html'); //302 by default
});

// Route handlers
app.get('/hello(.html)?', (req, res, next) => {
    console.log('attempted to load hello.html');
    next()
}, (req, res) => {
    res.send('Hello World!');
});


// chaining route handlers
const one = (req, res, next) => {
    console.log('one');
    next();
}

const two = (req, res, next) => {
    console.log('two');
    next();
}

const three = (req, res) => {
    console.log('three');
    res.send('Finished!');
}

app.get('/chain(.html)?', [one, two, three]);


app.all('*', (req, res) => {
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    }    
    else if(req.accepts('json')){
        res.json({error: "404 page not found"});
    } else{
        res.type('txt').send('404 not found')
    }
})



app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));