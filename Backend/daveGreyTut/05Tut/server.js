const {logEvents: logEvents} = require('./logEvents');
const {v4: uuid} = require("uuid");
const eventEmitter = require('events');
class Emitter extends eventEmitter{};

// initialize object
const myEmitter = new Emitter();

// add listener for log event.



// myEmitter.on('log', msg => {logEvents(msg)});

// myEmitter.emit("log", 'Log event emitted');