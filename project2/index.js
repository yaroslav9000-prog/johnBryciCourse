const coinlistURL = 'https://api.coingecko.com/api/v3/coins/list';
// let mainPage = `<header class="d-flex flex-wrap justify-content-center py-3 bg-dark"><a href="" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"><svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg><span class="fs-3 text-light">Crypto Report</span></a><ul class="nav nav-pills"><li class="nav-item"><a href="#" class="nav-link">Coins</a></li><li class="nav-item"><a href="#" class="nav-link">Real time report</a></li><li class="nav-item"><a href="#" class="nav-link">About</a></li></ul></header><div id="content"><div class="first-image" id=""><div class="bg-dark p-5 mb-5 rounded"><p class="text-light">Crypto Report is a website that provides the latest news and analysis on the cryptocurrency market. Whether you are a beginner or an expert, you can find useful information and insights on Crypto Report. You can also check the live prices of various cryptocurrencies and compare them with different fiat currencies. Crypto Report is your source for everything crypto.</p></div></div><div class="container-fluid py-4 bg-dark"><p class="fs-5 text-light">A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it.</p></div><div class="d-flex justify-content-center" id="second-image"><div class="px-5 py-2 text-success bg-dark rounded"><em><p class="fs-3">Start making Money</p></em></div></div><div class="container-fluid py-4 bg-dark"><p class="fs-5 text-light">We offer you a great platform for tracking and creating your own portfolio. So start doing your trading with us.<span class="text-success" id="coinsLink">Start</span></p></div></div>`;
let firstImg = '<div class="first-image" ></div>';
let aboutPage = `<div class="container-fluid col-xxl-8 px-5 py-5 first-image"><div class="row flex-lg-row-reverse align-items-center g-5 py-5"><div class="col-10 col-sm-8 col-lg-6"><img src="./pictures/passportPic.jpg" class="d-block mx-lg-auto img-fluid border border-dark border-5 rounded-pill" alt="Bootstrap Themes" width="300"height="200"loading="lazy"/></div><div class="col-lg-6 bg-dark p-2 rounded-3 border-3 border-dark"><h1 class="display-5 fw-bold text-white lh-1 mb-3">Yaroslav Yarkevich</h1><p class="lead text-light">Hey there, it's me Yaroslav it's my second project in John Bryce Academy. In this project we pratice AJAX api reponses and else. Work with HTML.</p></div></div></div>`; 


const checkDigits = (someName)=>{
    const myReg = new RegExp(/^\d/);
    return myReg.test(someName);
}

$(()=>{
    $.get(coinlistURL, (data)=>{
        let index = 0;
        while(index < 100){
            
            let counter = 0;
            if(checkDigits(data[counter])){
                document.dispatchEvent(new CustomEvent('coins:event', {detail: data[counter]}));
                index+=1;
            }
            counter+=1;
            console.log(data[counter]);
            console.log(`the number is ${index}`);
        }
    
    })
        
})

