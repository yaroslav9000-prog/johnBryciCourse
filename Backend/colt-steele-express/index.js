const express = require('express');
const app = express();
const port = 3000;
// console.log(app);

app.use((req, res)=>{
    console.log('We got a request!!!');
    
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})