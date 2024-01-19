var tasks = JSON.parse(localStorage.getItem("myTasks"));
if (tasks == null){
    var tasks = [];
}
createTable();

function createTable(){
    var result = `<table border="1" cellSpacing="0" style="margin-left:auto;margin-right:auto">`;    
    for (var index=0;index<tasks.length;index++){       
        result += `
            <tr>
                <td>${tasks[index].taskName}</td>
                <td>${tasks[index].taskDate}</td>
                <td><input type="checkbox" onclick='checkDone();'/></td>
            </tr>
        `;
    }
    result+="</table>" 
    document.getElementById("taskList").innerHTML = result;
}

//c'tor
function Tasks(taskName,taskDate,taskDone){
    this.taskName=taskName;
    this.taskDate=taskDate;
    this.taskDone=taskDone;

    this.taskIsDone = function(){
        this.taskDone=true;
    }
}

const saveTasks = ()=>{
    localStorage.setItem("myTasks",JSON.stringify(tasks));
}

const addTask = ()=>{
    var taskName = document.getElementById("taskName").value;
    var taskDate = document.getElementById("taskDate").value;
    tasks.push(new Tasks(taskName,taskDate,false));
    createTable();
    saveTasks();
}

const clearTasks = ()=>{
    localStorage.removeItem("myTasks")
    tasks=[];
    createTable();
}

const checkDone = () => {
    const trs = document.querySelectorAll('tr');
    const checkboxs = document.querySelectorAll('input[type="checkbox"]');
    for(let i=0; i<checkboxs.length; i++){
        if(checkboxs[i].checked===true){
            trs[i].classList.add('lineThrough');
        } else {
            trs[i].classList.remove('lineThrough');
        }
    }
}



