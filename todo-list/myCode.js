var taskList = JSON.parse(localStorage.getItem("myTasks"));
if(taskList==null){
    var taskList = [];
}
createTable();

function Task(taskName, taskDate){
    this.taskName = taskName;
    this.taskDate = taskDate;
}

const addTask = ()=>{
    const taskName = document.getElementById("taskName").value ;
    const taskDate = document.getElementById("taskDate").value ;
    const newTask = new Task(taskName, taskDate);
    taskList.push(newTask);
    createTable();
    saveTasks();   
}
const createTable= ()=>{
    result = `<ul onclick="ifChecked()">`;
    for(let index = 0; index < taskList.length; index++){
        result+= `<li>${taskList[index].taskName}, ${taskList[index].taskDate}<input class="gigi" type="checkbox" onlick="ifChecked()"></li>`;
    }
    result += `</ul>`;
    document.getElementById("listContainer").innerHTML = result;
}
// i need to access checkbox element
// check if it's checked.
// if it is then strike through the list element.

const ifChecked = ()=>{
    const listOfLi = document.querySelectorAll("li");
    const listOfCheckboxes = document.querySelector("input[type='checkbox']");
    for(let i = 0; i < listOfLi.length; i++){
        if(listOfCheckboxes.checked === true){
            listOfLi[i].classList.add("line");
        }else{
            listOfLi[i].classList.remove("line");
        }
    } 
}
//creating little function to save to my local storage.
const saveTasks = ()=>{
    localStorage.setItem("myTasks", JSON.stringify(tasks));
};

// creating function to clear all my list and all my local Storage.
const clearTasks = ()=>{
    localStorage.removeItem("myTasks");
    tasks=[];
    createTable();
}