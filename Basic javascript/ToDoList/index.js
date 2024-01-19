// const taskName = document.getElementById("taskName").value;
// const taskDate = document.getElementById("taskDate").value;
// const addTask = (taskName, taskDate) =>{
//     const unList = document.getElementById("task-list");

// }
// var taskNameList = [];
// var taskDateList = [];
// var taskDoneList = [];
// const addTask = () =>{
//     var taskName = document.getElementById("taskName").value;
//     var taskDate = document.getElementById("taskDate").value;
// }

// const newTask = (taskName, taskDate) =>{
//     taskNameList.push(taskName);
//     taskDateList.push(taskDate);
    
// }
function countdown(n){ // 10
    if(n < 1){
        return [];
    }else{
        const myArray = countdown(n-1);
        console.log(myArray);
        console.log(myArray.unshift(n));
        return myArray;
    
    }
}
console.log(countdown(10));
