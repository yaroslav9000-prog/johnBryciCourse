const student1 ={
    firstName: "Yaroslav",
    classNum: 48,
    grades: [86, 78, 99, 45, 100],
    getAverage: function(){
        let total = 0;
        for(let i = 0; i < this.grades.length; i++){
            total+= this.grades[i];
        }
        return total/this.grades.length;
    }
}
const student2 ={
    firstName: "Gabriel",
    classNum: 48,
    grades: [90, 90 , 35, 95, 100],
    getAverage: function(){
        let total = 0;
        for(let i = 0; i < this.grades.length; i++){
            total+= this.grades[i];
        }
        return total/this.grades.length;
    },
}
const student3 = {
    firstName: "Yarden",
    classNum: 48,
    grades: [85, 73, 76, 65, 99],
    getAverage: function(){
        let total = 0;
        for(let i = 0; i < this.grades.length; i++){
            total+= this.grades[i];
        }
        return total/this.grades.length;
    },
}
console.log(student1.getAverage());