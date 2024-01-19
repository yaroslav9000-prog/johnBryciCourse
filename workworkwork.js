var taskList = [];

function Task(taskName, taskDate, taskDone){
    this.taskName = taskName;
    this.taskDate = taskDate;
    this.done = taskDone;
    this.taskIsDone = ()=>{
        this.done = true;
    }
}

const addTask = function(){
    var taskName = document.getElementById("taskName").value;
    var taskDate = document.getElementById("taskDate").value;
    var newTask = new Task(taskName, taskDate, false);
    taskList.push(newTask);
    createList();
}

const createList = ()=>{
    var result = `<ul style="unstyled;">`;
    for(let counter = 0; counter < taskList.length; counter++){
        result += `<li>${taskList[counter].taskName}, ${taskList[counter].taskDate} <input type="checkbox" ${taskList[counter].done?"checked":""}></li>`
    }
    result += `</ul>`;
    document.getElementById("taskList").innerHTML= result;
}
// i need to add class to li element.
