import * as fs from "fs";
import carData from "../models/carData";
import path from "path";


const saveCarData = () =>{
fs.readFileSync(__dirname + '../myData' + '/storage.data', "utf-8",()=>{
    if(error) throw error;
    console.log(data);
})

}
console.log(saveCarData());
export {saveCarData};