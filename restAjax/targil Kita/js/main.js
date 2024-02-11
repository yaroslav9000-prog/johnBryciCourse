const myURL = "https://data.gov.il/api/3/action/datastore_search?resource_id=ebcc8e6d-16df-43f9-97d6-a36f1912c9ed&limit=216";
$(()=>{
    $.get(myURL, (data)=>{
        const result = data.result.records;
        console.log(result[0]);
        checkData(result);        
        
    })
})
    

    /*
authority: "אבו גוש"
candidates: "איבראהים קאזם:1,גבר סלים:2,ג'בר עלאה אל דין:3,עבד אל רחמן אחסן:4,משלב ניהאד:5"
city:"אבו גוש"
district:"ירושלים"
sumcandidates: 4
type: "מקומית"
_id: 1
*/
const checkData = (data)=>{
    let tableData = '';
    for(let index = 0; index< data.length; index++){
        
        if(data[index].sumcandidates === 1){
            document.dispatchEvent(new CustomEvent('event:one', {detail:data[index]}));
            
        }else if(data[index].sumcandidates >= 5){
            document.dispatchEvent(new CustomEvent('event:many', {detail:data[index]}));
        }else{
            tableData += `
        <tr>
            <td>${data[index].district}</td>
            <td>${data[index].city}</td>
            <td>${data[index].sumcandidates}</td>
            <td>${fixList(data[index].candidates)}</td>
        </tr>
        `;
    }
    
}   
    document.dispatchEvent(new Event('event:finished'));
        $('#tableOther').append(tableData);    
    
    
    
}

const fixList = (serverList)=>{
    let myList = serverList.replaceAll(',','\n');
    console.log(myList);
    return myList ;
}


