// 1.node js differs from regular js, in way that it runs on server and not on browser.
// 2.console is the terminal window.
console.log("Hello world");
// 3.now I have to work with global object instead of window object.
// console.log(global);
// 4.has Common Core modules that we will explore. 
// 5. CommonJS modules instead of ES6 modules.

const os = require("os");
const path = require("path");
const {add, subtract, multiply, divide} = require("./math");
// Node.js is missing some JS APIs like fetch.
console.log(multiply(6, 9));
console.log(add(9, 10));
console.log(subtract(7, 6));
console.log(divide(7, 3));
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir())

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));