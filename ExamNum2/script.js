/*  

*/

$(()=>{
    const allURL = "https://restcountries.com/v3.1/all";
    let nameSearch = "https://restcountries.com/v3.1/";
    const myForm = $('form').html();
    // write function that prints 1. total countries resulted in search,
    // average population for countries resulted, total population of resulted countries
    const printResults = (data)=>{
    
        const regionsObj = new Object();
        let totalPop = 0;
        let avgPop = 0;
        for(let index = 0; index < data.length; index++){
            totalPop += data[index].population;
        }
        avgPop = totalPop /data.length;
        $('#someInfo').append(`Total countries result: ${data.length} <br> Total Countries Population ${totalPop} <br> Average Population: ${avgPop}`);
        for(item in data){
            $('#statistics > tbody').append(`<tr><td>${data[item].name.official}</td><td>${data[item].population}</td></tr>`)
        }
        for(item in data){
            if(regionsObj[data[item]["region"]] == undefined){
            regionsObj[data[item]["region"]] = 1;
            }else{
                regionsObj[data[item]["region"]] ++;
            }
        }
        
        for(item in regionsObj){
            $('#countriesPerRegion').append(`<tr><td>${item}</td><td>${regionsObj[item]}</td></tr>`)
        }
        
        
    }
    const moneyFun = (data)=>{
        
        const moneyObj = new Object();
        let currencyObj = {};
        let firstCurrency;
        for(item in data){
               currencyObj = data[item]['currencies'];
            if(currencyObj == undefined){
                currencyObj = {bananas: "bananas"};
            }
            firstCurrency = Object.keys(currencyObj)[0];
            if(moneyObj[firstCurrency] == undefined){
                moneyObj[firstCurrency] = 1;
            }else{
                moneyObj[firstCurrency]++;
            }
        }
        for(item in moneyObj){
            $('#currencies > tbody').append(`<tr><td>${item}</td><td>${moneyObj[item]}</td></tr>`);
        }      
        
    }
    $('#all').on('click', ()=>{
        $("#tablesDiv").css("display", "block")
        $('form').html(myForm);
        $.get(allURL, (response)=>{
            printResults(response);
            moneyFun(response);
        })
    })
    $('#searchByNameButton').on('click',()=>{
        let countryName = $('#searchByName').val();
        $('#tablesDiv').css("display", "block");
        $.get(`https://restcountries.com/v3.1/name/${countryName}`, (response)=>{
           printResults(response);
           moneyFun(response);
        })
    })
})