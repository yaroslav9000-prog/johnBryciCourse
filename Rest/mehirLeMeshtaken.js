

$(()=>{
    const myEndPoint = 'https://data.gov.il/api/3/action/datastore_search?resource_id=7c8255d0-49ef-49db-8904-4cf917586031&q=';

    $.get(myEndPoint, (data)=>{
        const cityNames = new Object();
        const dataResult = data.result.records;    
        //LamasName
        for(let index = 0; index < dataResult.length; index++){
            if(cityNames[dataResult[index].LamasName] == undefined){
                cityNames[dataResult[index].LamasName] = dataResult[index].LamasName;
            }
        }
        for(item in cityNames){
            $('select').append(`<option>${item}</option>`);
        }
    })
    
    $('#citySelector').change(()=>{
        $('table').html('<table><tr><th>City</th><th>Lottery id</th><th>Lottery signup ends</th></tr></table>')
        var selectedOption = $('option:selected').val();
        $.get(myEndPoint + selectedOption, (response)=>{
            let data = response.result.records;
            for(item in data){
                if(data[item].LamasName == selectedOption){
                    $('table').append(`<tr><td>${data[item].LamasName}</td><td>${data[item].LotteryId}</td><td>${data[item].LotteryEndSignupDate
                    }</td></tr>`)

                }
            }
        })
    })

    })
