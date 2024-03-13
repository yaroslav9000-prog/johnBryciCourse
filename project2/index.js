const timeInterval =120000;
const myDate = new Date();

$(()=>{
  let firstImg = '<div class="first-image" ></div>';
  let aboutPage = `<div class="container-fluid col-xxl-8 px-5 py-5 first-image"><div class="row flex-lg-row-reverse align-items-center g-5 py-5"><div class="col-10 col-sm-8 col-lg-6"><img src="./pictures/passportPic.jpg" class="d-block mx-lg-auto img-fluid border border-dark border-5 rounded-pill" alt="Bootstrap Themes" width="300"height="200"loading="lazy"/></div><div class="col-lg-6 bg-dark p-2 rounded-3 border-3 border-dark"><h1 class="display-5 fw-bold text-white lh-1 mb-3">Yaroslav Yarkevich</h1><p class="lead text-light">Hey there, it's me Yaroslav it's my second project in John Bryce Academy. In this project we pratice AJAX api reponses and else. Work with HTML.</p></div></div></div>`; 
         
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
    
       
    const cardBody = `<div class="card col-md-4 col-9">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h4 class="card-title">${currentCoin.id}</h4>
          <label class="switch" >
            <input type="checkbox" onclick="addCoin('${currentCoin.id}')"/>
            <span class="slider round"></span>
          </label>
        </div>
        <h6 class="card-subtitle mb-2 text-body-secondary">${currentCoin.name}</h6>
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
                  class="modal fade"
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
    
// let mainPage = `<header class="d-flex flex-wrap justify-content-center py-3 bg-dark"><a href="" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"><svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg><span class="fs-3 text-light">Crypto Report</span></a><ul class="nav nav-pills"><li class="nav-item"><a href="#" class="nav-link">Coins</a></li><li class="nav-item"><a href="#" class="nav-link">Real time report</a></li><li class="nav-item"><a href="#" class="nav-link">About</a></li></ul></header><div id="content"><div class="first-image" id=""><div class="bg-dark p-5 mb-5 rounded"><p class="text-light">Crypto Report is a website that provides the latest news and analysis on the cryptocurrency market. Whether you are a beginner or an expert, you can find useful information and insights on Crypto Report. You can also check the live prices of various cryptocurrencies and compare them with different fiat currencies. Crypto Report is your source for everything crypto.</p></div></div><div class="container-fluid py-4 bg-dark"><p class="fs-5 text-light">A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it.</p></div><div class="d-flex justify-content-center" id="second-image"><div class="px-5 py-2 text-success bg-dark rounded"><em><p class="fs-3">Start making Money</p></em></div></div><div class="container-fluid py-4 bg-dark"><p class="fs-5 text-light">We offer you a great platform for tracking and creating your own portfolio. So start doing your trading with us.<span class="text-success" id="coinsLink">Start</span></p></div></div>`;

   

})

const myCoins = [];
const addCoin = (currentId)=>{    

  const idPosition = myCoins.indexOf(currentId);
  if(myCoins.length < 5){
  if(idPosition < 0){
    myCoins.push(currentId);
    console.log(myCoins);
  }
}
  if(idPosition >=0){
  myCoins.splice(idPosition, 1);
  console.log(myCoins);
  }
}  


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

    