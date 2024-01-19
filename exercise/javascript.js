// const inputContainer = document.getElementById("textBox");
// let mirrorText = document.getElementById("mirrorText");
// inputContainer.addEventListener('keyup', function(event){
//     inputContainer.value = mirrorText.value;
// });


// each time input field is clicked i need to change it's background color to yellow.
// let inputContainer = document.getElementsByClassName("container")
    let inputList = document.getElementsByTagName("input");

function newForm(input1, input2, input3, input4, input5, input6, input7, input8){
    this.input1= input1;
    this.input2 = input2;
    this.input3 = input3;
    this.input4 = input4;
    this.input5 = input5;
    this.input6 = input6;
    this.input7 = input7;
    this.input8 = input8;
}    



    for(let index = 0; index < inputList.length; index++){
        inputList[index].addEventListener("focusin", ()=>{
            inputList[index].style.backgroundColor = "yellow";
        });
        inputList[index].addEventListener("focusout", ()=>{
            inputList[index].style.backgroundColor = "white";
        });
    }   
function createTable = ()=>{

}
// user types in his stuff
// user clicks submit ==> then all 
