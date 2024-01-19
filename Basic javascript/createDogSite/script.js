let dogURL = "https://random.dog/woof.json";
setInterval(async()=>{
    const dogData = await fetch(dogURL);
    const res = await dogData.json();
    console.log(res.url);
    document.getElementById("dogImg").src =res.url;
}, 5000)