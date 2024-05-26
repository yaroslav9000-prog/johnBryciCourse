const port = 8080;
const fs = require('fs');
const http = require("http");
const events = require('events');
const eventEmitter = new events.EventEmitter();

const myHandlers = { 
    handleCall : ()=>{console.log(myEvents.courierCall);},
    handleStart: ()=>{console.log(myEvents.courierStart);},
    handleFinish: ()=>{console.log(myEvents.courierFinish);},
    handleGave: ()=>{console.log(myEvents.courierGave);},
    handleBack: ()=>{console.log(myEvents.courierBack)} 
}

const myEvents = {
    courierCall : "Time to go",
    courierStart: "Started driving",
    courierFinish: "Reached destination",
    courierGave: "Courier gave the order",
    courierBack: "Courier returned back to joint"
}

http.createServer((req,res)=>{
    fs.readFile('html/index.html', (err, data)=>{
        if(err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        return;
    })
    eventEmitter.on(myEvents.courierCall, myHandlers.handleCall);
    eventEmitter.on(myEvents.courierStart, myHandlers.handleStart);
    eventEmitter.on(myEvents.courierFinish, myHandlers.handleFinish);
    eventEmitter.on(myEvents.courierGave, myHandlers.handleGave);
    eventEmitter.on(myEvents.courierBack, myHandlers.handleBack);
    setTimeout(()=>{
        eventEmitter.emit(myEvents.courierCall);
        eventEmitter.emit(myEvents.courierStart);
        eventEmitter.emit(myEvents.courierFinish);
        eventEmitter.emit(myEvents.courierGave);
        eventEmitter.emit(myEvents.courierBack);
    })
    }).listen(port);
    


// for(let index = 1; index<= 1000; index++){
//     if(index % 7 ==0 || index %10 == 7){
//         console.log("Boom");
//     }
// }
const myInfo = {
    name: "Yaroslav",
    lastName: "Yarkevich",
    address: "Kiryat-Motzkin",
}
