const http = require('http');
const fs = require('fs');
const port = 3000;

const studentData =[
    {"name": "Yaroslav","grade": 90},
    {"name": "Yarden","grade": 100},
    {"name": "Semyon", "grade": 95},
    {"name": "Gabriel", "grade": 100},
    {"name": "Ilan", "grade": 82}];


const writeStudentData = (data) =>{
    const stringData = JSON.stringify(data);
    fs.writeFileSync('studentsData.json', stringData, (err) =>{
        if(err) throw err;
        console.log('File was written successfuly');
    })
}

writeStudentData(studentData);


