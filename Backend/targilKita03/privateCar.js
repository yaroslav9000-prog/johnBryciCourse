const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;


const dataEP = 'https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q='

const serverPrivateCar =  (licenseNumber)=>{

    const data = dataEP + licenseNumber;

    return  new Promise((resolve, reject) =>{
        let dataJSON;
        fetch(data)
            .then(popka =>{popka.json()
                .then(value => {
                    dataJSON = value;
                    let keyValueArr = '';
                    
                    for(let item in value.result.records[0]){
                        keyValueArr += `${item}: ${value.result.records[0][item]}\n`; 
                    }
                    // const myString = JSON.stringify(value.result.records)
                    // console.log(Object.keys(value.result.records[0]));
                    // console.log(keyValueArr);
                    if(!fs.existsSync(path.join(__dirname, 'searchLogs'))){
                fs.mkdir(path.join(__dirname, 'searchLogs'),()=>
                    fs.writeFile(path.join(__dirname,'searchLogs','logs.txt'), keyValueArr + '\n\n', (err)=>{
                        if(err)throw err;
                        console.log("New directory created and file appended!!!");
                    }));
                }else{
                    fs.appendFile(path.join(__dirname, 'searchLogs', 'logs.txt'), keyValueArr + '\n\n', (err)=>{
                        if(err) throw err;
                    });
                }
                resolve(value.result.records[0]);
                })                
            })
            
        })
            
        } 
        const privateCar = async licenseNumber =>{
            const data = await serverPrivateCar(licenseNumber)
            return data;
        }
        // privateCar(6225433);
module.exports = {privateCar};