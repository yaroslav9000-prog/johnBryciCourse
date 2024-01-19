let userList = [];
// i need to create object of all data submitted to me.

const createNewUser = ()=>{
    let newUser = new Object();
    newUser.firstName = document.getElementById("firstName").value;
    newUser.secondName = document.getElementById("secondName").value;
    newUser.objDate = document.getElementById("date").value;
    newUser.userPic = document.getElementById("userPic").value;
    newUser.gender= document.querySelector("input[name = gender]:checked").value;
    userList.push(newUser);
}

const createTable = ()=>{
    result = "<tr><th>Picture</th><th>First name</th> <th>Second name</th><th>Date</th><th>Gender</th></tr> "
    for(let index = 0; index < userList.length; index++){
        result += `<tr>
            <td><img src="${userList[index].userPic}"/></td>    
            <td>${userList[index].firstName}</td>
            <td>${userList[index].secondName}</td>
            <td>${userList[index].date}</td>
            <td>${userList[index].gender}</td>
            </tr>
            `
    }
    document.getElementById("table-form").innerHTML = result;
}
const tralala = ()=>{
    createNewUser();
    createTable();
    resetForm();
}
const resetForm = ()=>{
    document.getElementById("form-container").reset();
}