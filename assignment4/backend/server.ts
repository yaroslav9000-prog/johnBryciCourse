import express, {Request, Response, NextFunction} from "express";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import { accountOperations } from "./Routes/accounts.router";
import {logEvent} from "./middleware/logger";
import cors from "cors";
const result = require("dotenv").config();
const env = result.parsed;

const server = express();

server.use(logEvent)
// let isAdmin = false;

const corsOptions = {
    origin: "*", //allow any origin
    methods: ["GET","POST"], //which methods i will allow
    allowedHeaders: ["Content-Type","Authorization"], //which headers i will get
    exposedHeaders: ["Authorization"] //which headers i will expose
}

// const serverCors = {
//     origin: "127.0.0.1",
//     methods: ["POST"],
//     allowedHeaders: ["Content-Type","Authorization"],
//     exposedHeaders: ["Authorization"]
// }

//My db
server.use(cors(corsOptions));

const connectToMongoDB = async ()=>{
    await mongoose.connect(env.DB_CONN_STRING);
    console.log("Yeah we did it, we connected mongoDB");
}

try{
    connectToMongoDB();
}catch(e){
    console.log(`WUah wuah we failed to connect captain. ${e}`);
}




server.use(express.json());


server.use(express.urlencoded({extended: false}));

server.get("/", (req: Request, res: Response)=>{
    res.status(200).json({"msg": "you are home"});
})

server.use("/accounts", accountOperations);



server.listen(env.PORT, env.HOST, ()=>{
    console.log(`server is up and running on port: ${env.PORT}`);
});