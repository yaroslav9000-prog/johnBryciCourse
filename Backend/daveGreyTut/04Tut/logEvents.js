// Event emmiter.
const {format} = require('date-fns');
const {v4: uuid} = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');


const logEvents = async (message)=>{
    const dateTime = `${format(new Date(), 'yyyyMMdd\thh:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`
    console.log(logItem);
    try{
        if(!fs.existsSync(path.join(__dirname, 'logs', 'eventLog.txt'))){
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
            // testing
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem );
    }catch(error){
        console.log(error)
    }
}

// console.log(format(new Date(), 'yyyyMMdd\thh:mm:ss'));

// console.log(uuid());
module.exports = {logEvents};