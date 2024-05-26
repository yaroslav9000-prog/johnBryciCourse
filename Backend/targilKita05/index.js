const express = require("express");
const app = express();
const port = 8080; 
const host = "localhost";

const objArray = [
    {"id": 0, "name": "Yaroslav", "grade": "90"},
    {"id":1, "name": "Gabriel", "grade": "100"},
    {"id": 2, "name": "Yarden", "grade": "900"},
    {"id": 3, "name": "Matti", "grade": "10000"},
    {"id": 4, "name": "Ilan", "grade": "85"},
]

const mySearch = (id)=>{
    objArray.filter(item => item.id!=id);
}

app.get(`/`, (req, res, next)=>{
    res.send(objArray);  
    next();  
})

app.get(`/:id`, (req,res)=>{
    res.send
})

app.listen(port, host);
