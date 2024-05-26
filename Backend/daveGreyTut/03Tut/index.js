const {format} = require('date-fns');
const {v4 : uuid} = require("uuid");


console.log(format(new Date(), 'yyMMdd\tHH:mm:ss'));
console.log(uuid());
/* 
"dependencies": {
    "date-fns": "^3.6.0",
    "uuid": "^9.0.1"

    ^ Means update minor version and patches(digits after first dot).
    ~ Means update only patches (a digit after second dot).
    * means always use the latest version of the package.(not safe for development)

    npm i uuid@(version number) - This command line installs the specific version package you want.
    to remove a dependency from dependency list use command npm rm

*/