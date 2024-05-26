const timeInterval =120000;
const myDate = new Date();
const trashIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>`;
  let firstImg = '<div class="first-image" ></div>';
  let aboutPage = `<div class="container-fluid col-xxl-8 px-5 py-5 first-image"><div class="row flex-lg-row-reverse align-items-center g-5 py-5"><div class="col-10 col-sm-8 col-lg-6"><img src="./pictures/passportPic.jpg" class="d-block mx-lg-auto img-fluid border border-dark border-5 rounded-pill" alt="Bootstrap Themes" width="300"height="200"loading="lazy"/></div><div class="col-lg-6 bg-dark p-2 rounded-3 border-3 border-dark"><h1 class="display-5 fw-bold text-white lh-1 mb-3">Yaroslav Yarkevich</h1><p class="lead text-light">Hey there, it's me Yaroslav it's my second project in John Bryce Academy. In this project we practice AJAX api interaction and work with HTML. I got to learn a lot by now.</p></div></div></div>`; 
  let progressBar = `<div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar progress-bar-striped progress-bar-animated" id="progressBar"></div></div>`;     
  let coinsNotFound = ``
  const checkDigits = (dataList)=>{
      const filteredArray = [];
      const myReg = new RegExp(/^[a-z]/);
  
      for(let index = 0; index < dataList.length; index++){
          if(myReg.test(dataList[index].id)){
              filteredArray.push(dataList[index]);
          }
      }
      return filteredArray;
  }

  
  const createCard = (currentCoin)=>{
    
       
    const cardBody = `<div  class="card col-md-4 col-9 ">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h4 class="card-title">${currentCoin.symbol}</h4>
          <label class="switch" >
            <input id="${currentCoin.id}CheckBox" type="checkbox" onclick="checkList('${currentCoin.symbol}')"/>
            <span class="slider round"></span>
          </label>
        </div>
        <h6 class="card-subtitle mb-2 text-body-secondary ">${currentCoin.name}</h6>
        <button
        type="button"
        class="btn btn-primary justify-content-between"
        data-bs-toggle="modal"
        data-bs-target="#${currentCoin.id}"
        onClick="checkCoin('${currentCoin.id}')"
      >
        more info
      </button>
      </div>
    </div>
  
  <!-- Modal -->
  <div
                  class="modal fade "
                  id="${currentCoin.id}"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">
                          ${currentCoin.id}
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body"><div
                      class="progress"
                      role="progressbar"
                      aria-label="Animated striped example"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        class="progress-bar progress-bar-striped progress-bar-animated"
                        id="progressBar"
                      >
          
                      </div>
                    </div></div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Understood
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
    
    `;
      $('#coinsContainer').append(cardBody) ;
  
  }
  
  

  const loadCoinList = ()=>{
    if(JSON.parse(localStorage.getItem('coinList')) != null){
      let coinList = JSON.parse(localStorage.getItem('coinList'));
      coinList = checkDigits(coinList);
      $('#coinsContainer').empty();
      for(let index = 0; index < 100; index++){
        createCard(coinList[index]);
      }
    }else{
      
      const coinlistURL = 'https://api.coingecko.com/api/v3/coins/list';  
    $.get(coinlistURL, (data)=>{
        const stringData = JSON.stringify(data)
        localStorage.setItem('coinList', stringData);
        const myFiltList2 = checkDigits(data);
        $('#coinsContainer').empty();
        for(let index = 0; index < 1; index++){
            createCard(myFiltList2[index]);
        }
        console.log(myFiltList2);
        
    })
    }
  }
  

  
  
    
loadCoinList();





const myCoins = [];
const myModal = $('#myModal');
//Working with 5 coins.
const checkList =(currentId)=>{
  if(myCoins.length <5){
    addCoin(currentId);
  }else{
    $(`#${currentId}CheckBox`).prop('checked', false);
    $('#myModalBody').empty();
    for(let index = 0; index < myCoins.length; index++){
      $('#myModalBody').append(`<div class="d-flex justify-content-between">${myCoins[index]} <button type='button' onclick="addCoin('${myCoins[index]}')" class='btn btn-danger border border-0'">${trashIcon}</button></div>`)
    }
    myModal.modal('show');
    return;
    
  }
}
const addCoin = (currentId)=>{    
  const currentCoin = myCoins.indexOf(currentId);
  if(currentCoin < 0){
    myCoins.push(currentId);
  }else{
    myCoins.splice(currentCoin, 1);
    $(`#${currentId}CheckBox`).prop('checked', false);
  }
}
//


//Checking how long ago coin info was updated. And Building modal body for each one of them.
async function checkCoin(currentId){
  const currentCoin = JSON.parse(localStorage.getItem(`${currentId}`));
  if(currentCoin !== null){
    if(myDate.getTime() - currentCoin.lastUpdated > timeInterval){
      localStorage.removeItem(`${currentId}`);
      getCoinInfo(currentId);     
    }else{
      buildModal(currentId, currentCoin);
    }
  }else{
    getCoinInfo(currentId);
  }
} 

const buildModal = (currentId, data)=>{
  const divModalBody = document.querySelector(`div#${currentId} > div.modal-dialog > div.modal-content > div.modal-body`);
  divModalBody.innerHTML = `<img src="${data.image.thumb}"/><br/> Trading:<br/>
    USD: ${data.market_data.current_price.usd}$<br/>EUR: ${data.market_data.current_price.eur}€ <br/>ILS: ${data.market_data.current_price.ils}₪` ; 
}

  function getCoinInfo(currentId){
    const coinIdURL = 'https://api.coingecko.com/api/v3/coins/';
    
    const response = fetch(coinIdURL + currentId)
    .then(data => data.json())
    .then(result => {result.lastUpdated = myDate.getTime(); localStorage.setItem(`${currentId}`, JSON.stringify(result)); buildModal(currentId, result)})    
    .catch(error=> console.log('error: ', error));
    }

const coinVal = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD";
$.getJSON(coinVal, (data)=>{
  console.log(data);
})
$('.nav-link:eq(2)').on('click',(e)=>{
  $('#coinsContainer').empty();
  $('#coinsContainer').html(aboutPage);
  console.log(e);
})
$('.nav-link:eq(0)').on('click', (e)=>{
  $('#coinsContainer').empty();
  $('#coinsContainer').html(loadCoinList());
  console.log(e);
})

const searchForCoin = (currentID)=>{
  $('#coinsContainer').empty();
  $('#coinsContainer').append(progressBar);

  let myCoinsList = JSON.parse(localStorage.getItem("coinList"));
  myCoinsList = checkDigits(myCoinsList);
  let searchResult = [];
    for(let counter = 0; counter < myCoinsList.length; counter++){
      if(myCoinsList[counter].symbol == currentID){
        searchResult.push(myCoinsList[counter]);       
      }
    }
    $('#coinsContainer').empty();
    if(searchResult.length > 0){
      for(let index = 0; index < searchResult.length; index++){
        createCard(searchResult[index]);
      }  
    }else{
      $('#coinsContainer').append(`<div class="card bg-dark text-danger border border-danger"><div class="card-body">No coins found.</div></div>`)
      return;
    }
       
}
$('#searchButton').on('click',()=>{
  searchForCoin($("#searchValue").val());
})
$(document).keypress(function(event){
  if (event.which == 13){
      $("#searchButton").click();
  }
});