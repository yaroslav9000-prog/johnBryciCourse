// writing form for my html
var mySite = `<form>
    <input type="text" id="carNumber" placeholder = "type in your car's license number"> <input type="button" value="submit"><br>
    <input type="text" disabled placeholder="manufacturer"><br>
    <input type="text" disabled placeholder="model"><br>
    <input type="text" disabled placeholder="color"><br>
    <input type="text" disabled placeholder="gasoline"><br>
    <input type="text" disabled placeholder="year"><br>
    <input type="text" disabled placeholder="nextTest"><br>
    <input type="text" disabled placeholder="km"><br>
</form>
<hr/>
<table></table>
`
// injecting mySite into html
document.getElementById("mySite").innerHTML = mySite;
// getting access to database
const apiUrl = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=5";
async function getapi(url){
    //storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    return data;
}
// calling that async function
// Getting access to car number
let carNumber = document.getElementById("carNumber");
let dataBase = getapi(apiUrl);
console.log(dataBase);