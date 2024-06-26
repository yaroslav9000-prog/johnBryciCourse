import axios from "axios";

//endpoints -> data.gov.il
const CAR_URL       = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
const BIKE_URL      = "https://data.gov.il/api/3/action/datastore_search?resource_id=bf9df4e2-d90d-4c0a-a400-19e15af8e95f&q=";
const TRUCK_URL     = "https://data.gov.il/api/3/action/datastore_search?resource_id=cd3acc5c-03c3-4c89-9c54-d40f93c0d790&q=";
const HANDICAP_URL  = "https://data.gov.il/api/3/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&q=";
const OFFROAD_URL   = "https://data.gov.il/api/3/action/datastore_search?resource_id=f6efe89a-fb3d-43a4-bb61-9bf12a9b9099&q=";
const RECALL_URL    = "https://data.gov.il/api/3/action/datastore_search?resource_id=36bf1404-0be4-49d2-82dc-2f1ead4a8b93&q=";
const SHAMAI_URL    = "https://data.gov.il/api/3/action/datastore_search?resource_id=4a434d65-3ca2-45e5-8026-5d9819c3f95c&q=";
const carInfo = async (id:string)=>{
    return (await axios.get(CAR_URL+id)).data.result.records[0];
}

const bikeInfo = async (id:string)=>{
    return (await axios.get(BIKE_URL+id)).data.result.records[0];
}

const truckInfo = async (id:string)=>{
    return (await axios.get(TRUCK_URL+id)).data.result.records[0];
}
const handicapInfo = async (id:string)=>{
    return (await axios.get(HANDICAP_URL+id)).data.result.records[0];
}
const offroadInfo = async (id:string)=>{
    return (await axios.get(OFFROAD_URL+id)).data.result.records[0];
}
const recallInfo = async (id:string)=>{
    return (await axios.get(RECALL_URL+id)).data.result.records[0];
}
const shamaiInfo = async(id: string) =>{
    return (await axios.get(SHAMAI_URL + id)).data.result.records;
}
export {
    carInfo,
    bikeInfo,
    truckInfo,
    handicapInfo,
    offroadInfo,
    recallInfo,
    shamaiInfo
}