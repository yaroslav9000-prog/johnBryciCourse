
const coinIdURL = 'https://api.coingecko.com/api/v3/coins/';
  async function getCoinInfo(someId){
    const divModalBody = document.querySelector(`div#${someId} > div.modal-dialog > div.modal-content > div.modal-body`);
    const response = await fetch(coinIdURL + someId)
    .then(response => response.json())
    .then(result => {divModalBody.innerHTML = `<img src="${result.image.thumb}"/><br/> Trading:<br/>
    USD: ${result.market_data.current_price.usd}$<br/>EUR: ${result.market_data.current_price.eur}€ <br/>ILS: ${result.market_data.current_price.ils}₪`})
    
    .catch(error=> console.log('error: ', error));     
    
    
  }

  // .then(response => {
  //   const contentLength = response.headers.get('content-length');
  //   let loaded = 0;
  //   return new Response(
  //     new ReadableStream({
  //       start(controller){
  //         const reader = res.body.getReader();
  //         read()
  //         function read(){
  //           reader
  //         }
  //       }
  // })
  //   ); 
  // })




/*.then(response => response.json())
    .then(result => {divModalBody.innerHTML = `<img src="${result.image.thumb}"/><br/> Trading:<br/>
    USD: ${result.market_data.current_price.usd}$<br/>EUR: ${result.market_data.current_price.eur}€ <br/>ILS: ${result.market_data.current_price.ils}₪`})
    
    .catch(error=> console.log('error: ', error)); */



  //document.querySelector(`div#${someId} > div.modal-dialog > div.modal-content > div.modal-body`).innerHTML = `${result.image.thumb}<br/> Trading:<br/>USD: ${result.market_data.current_price.usd}$<br/>EUR: ${result.market_data.current_price.eur}€ <br/>ILS: ${result.market_data.current_price.ils}₪`; 
  //result.description.en
  /*
  image: result.image.thumb
  prices: in USD EUR ILS marketdata currentPrice
  */
  
getCoinInfo('a4-finance');

const createCard = (someCoin)=>{
  
     
  const cardBody = `<div class="card col-4">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h4 class="card-title">${someCoin.id}</h4>
        <label class="switch" onclick="">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
      <h6 class="card-subtitle mb-2 text-body-secondary">${someCoin.name}</h6>
      <button
      type="button"
      class="btn btn-primary justify-content-between"
      data-bs-toggle="modal"
      data-bs-target="#${someCoin.id}"
      onclick = "getCoinInfo('${someCoin.id}')"
    >
      more info
    </button>
    </div>
  </div>

<!-- Modal -->
<div
                class="modal fade"
                id="${someCoin.id}"
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
                        ${someCoin.id}
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">Here should be a description</div>
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
    document.getElementById('coinsContainer').innerHTML += cardBody;

}