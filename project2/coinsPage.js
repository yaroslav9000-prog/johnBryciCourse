const coinArray = [];
const createCard = (someCoin)=>{
    const cardBody = `<div class="card col-4">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h4 class="card-title">${someCoin.id}</h4>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
      <h6 class="card-subtitle mb-2 text-body-secondary">${someCoin.name}</h6>
      <button class="btn btn-primary mt-3 border-dark">
        More info
      </button>
    </div>
  </div>`;
    document.getElementById('coinsContainer').innerHTML += cardBody;
}





