//1.Create a form with header Save the date.
//2. Create input box that saves the name of date
//3. Create input box that shows minimun present sum and one with max sum present.
//4. Create selector for kind of date (wedding, bar mitzvah, birthday)
//5. Create box that contains URL Adress of picture of whom's date.
//6. Input box that chooses date.
//7. Create button for saving all data.
//8. After pressing on adding the button all previous data should be inputed. min and max 
// presents should be numbers. form should be cleared after addition of the date.
let dateList = [];

let myForm = `    
<form action="">
<h1>Save The Date</h1>
<input id="dateName" type="text" placeholder="please write name of your date"><br>
<label for="money">How much you give?</label><br>
<input id="dateMoney" name="money" type="range" min="400" max="10000" value="1000" onclick="showSum(this.value)"><br>
<span id="rangeValue" >0</span><br>
<label for="dateType">Choose type of date:</label><br>
<select name="dateType" id="dateType" >
    <option value="wedding">wedding</option>
    <option value="birthday">birthday</option>
    <option value="bar mitzvah">bar mitzvah</option>
    <option value="anniversary">anniversary</option>
</select><br>
<input id="datePic" type="url" placeholder="input url of a picture"><br>
<input id="dateDate" type="date"><br>
<input type="button" value="submit" onclick="addDate()">
</form>
<div id="dateList"></div>
`

document.querySelector("body").innerHTML = myForm;


const createDateObj = ()=>{
    const dateName = document.getElementById("dateName").value;
    const dateMoney = document.getElementById("dateMoney").value;
    const dateType = document.getElementById("dateType").value;
    const datePic = document.getElementById("datePic").value;
    const dateDate = document.getElementById("dateDate").value;
    var myDate = new DateObj(dateName, dateMoney, dateType, datePic, dateDate);
    dateList.push(myDate);    
}
//object function
function DateObj(dateName, dateMoney, dateType, datePic, dateDate){
    this.dateName = dateName;
    this.dateMoney = dateMoney;
    this.dateType = dateType;
    this.datePic = datePic;
    this.dateDate = dateDate;
}
const showSum= (value)=>{
    document.getElementById("rangeValue").innerHTML = value;
}
const createTable =()=>{
    result = `<table>`;
    result += `<tr>
    <td>${dateList[dateList.length - 1].dateName}</td>
    <td>${dateList[dateList.length -1].dateMoney}</td>
    <td>${dateList[dateList.length -1].dateType}</td>
    <td>${dateList[dateList.length -1].datePic}</td>
    <td>${dateList[dateList.length -1].dateDate}</td>
    <td><input type="button" value="clear"></td>
    </tr></table>`;
    document.getElementById("dateList").innerHTML += result;
    

}
//function to store the tasks localy
const saveMyList= ()=>{
    localStorage.setItem("dateList", JSON.stringify(dateList));

}
const addDate =()=>{
    createDateObj();
    createTable();  
    saveMyList();    
}