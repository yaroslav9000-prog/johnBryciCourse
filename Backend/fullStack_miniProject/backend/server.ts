import bodyParser from "body-parser"
import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import config from "./utils/config";

const server = express();







server.listen(config.webPort, ()=>{
    console.log('server up and running on port ' + config.webPort + ". On domain " + config.webHost);
})