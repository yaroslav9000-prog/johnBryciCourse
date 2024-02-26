const coinlistURL = 'https://api.coingecko.com/api/v3/coins/list';
let mainPage = '<div class="first-image"></div><div class="container-fluid py-4 bg-dark"><p class="fs-5 text-light">A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it.</p></div><div class="second-image"></div><div class="container-fluid py-4 bg-dark"><p class="fs-5 text-light">We offer you a great platform for tracking and creating your own portfolio. So start doing your trading with us. <a href="">Start</a></p></div>';
let coinPage ;
let firstImg = '<div class="" id="first-image"></div>';
$(()=>{
    const moveToCoins = ()=>{
        $('#content').empty();
        $('#content').append(firstImg);
    }
    //event listener to move user to home page.
    $("a:first").on('click', ()=>{
        $('#content').empty();
        $('#content').append(mainPage);
    })
    // event Listeners to move user to coins list
    $("ul > li:eq(0)").on('click', ()=>{
        moveToCoins();
    })
    $('#coinsLink').on('click', ()=>{
        moveToCoins();
    })
    // event Listener to move user to about page.
    //
    //

    // event listener to move user to real time report page.
    
})