/*    function for getting max value   */
// function getMax(userArray){
//     var maxValue = 0;
//     var array = userArray;
//     for(var i = 0; i<array.length; i++){
//         if(array[i] > maxValue){
//             maxValue = array[i];
//         }
//     }
//     return maxValue;
// }
/* some other function */
// const tenth = (userSalary) =>{
//     const contribute = userSalary/ 10;
//     return contribute;
// }
// const fifth = (userSalary) =>{
//     const contribute = userSalary/ 5;
//     return contribute;
// }
const calc = () =>{
    var salary = Number(document.getElementById("salary").value);
    var myResponse = `Maaser 10%: ${salary*0.1} Homash 20%: ${salary*0.2}`
    document.getElementById("response").innerText = myResponse;
}