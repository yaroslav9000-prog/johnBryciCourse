const express = require('express');
const APP = express();
const PORT = 3000;
const HOST = 'localhost';
const {privateCar} = require('../targilKita03/privateCar');


APP.get("/", (req, res)=>{
    res.send("hello its me");
})

APP.get('/car/:car', (req, res)=>{
    const carNumber = parseInt(req.params.car);
    privateCar(carNumber).then(data =>{
        res.send(data);
    });
})


APP.listen(PORT, HOST, (req, res)=>{
    console.log('Up and running on port: 3000');
});