const fs = require("fs");
const path = require('path');


fs.readFile("./files/starter.txt","utf8" ,(err, data)=>{
    if(err) throw err;
    console.log(data);
})

console.log('Hello...');

fs.writeFile(path.join(__dirname, 'files','writeTxts.txt'),'Fuck you!!!',(err)=>{
    if(err) throw err;
    console.log('Writing file is complete');
});
fs.appendFile(path.join(__dirname, 'files','testText.txt'),"Testing appendFile", 'utf8', (err)=>{
    if(err) throw err;
    console.log('appending is complete.');
})

//Exit on uncaught errors.
process.on("uncaughtException", err=>{
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})