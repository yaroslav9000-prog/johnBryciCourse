import axios from "axios";
import carData from "../models/carData";
const CAR_URL = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";

// licensePlate for checkup 6225433
const getCarInfo = async(id: number) =>{
    
    let myData = (await axios.get(CAR_URL + id)).data.result.records[0];
    const newCar = new carData(id, myData["tozeret_nm"], myData["shnat_yitzur"], myData["mivchan_acharon_dt"],myData["baalut"],myData["tzeva_rechev"], myData["sug_delek_nm"]);
    return newCar;   
}

/* 
car sold
search by manufacturer
search by price
search by model
list all sold cars
*/
const carSold = (carNumber : number) =>{};
const searchByManuf = (carNumber: number)=>{};
const searchByPrice = (carNumber: number)=>{};
const searchByModel = (model : string) =>{};
const listSoldCars = ()=>{};
getCarInfo(6225433).then(data=>{
    console.log(data);
})