const divideNumber = number =>{
    let length = 0;
    let myNumber = number;
    while(myNumber > 0){
        myNumber/= 10;
        myNumber = Math.floor(myNumber);
        length++;
        
    }
    let myTenth = Math.pow(10, length -1);
    return number/ myTenth;
}
console.log(divideNumber(234));