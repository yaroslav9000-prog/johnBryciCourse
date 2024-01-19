class Dog{
    constructor(dogUrl, foxUrl){
        this.dogUrl = dogUrl;
        this.foxUrl = foxUrl;    
    }
    get getDogPic(){
        const dogImg = document.getElementById("dogImg");
        fetch(this.dogUrl).then((jsonObject)=>{
            jsonObject.json().then((jsonData)=>{
                dogImg.src = jsonData.url;
            })
        })
    }
    get getFoxPic(){
         const foxImg = document.getElementById("foxImg");
         fetch(this.foxUrl).then((jsonObject)=>{
            jsonObject.json().then((jsonData)=>{
                console.log(jsonData);
                foxImg.src = jsonData.image;
            })
         })
    }
    }

var ha = new Dog("https://random.dog/woof.json", "https://randomfox.ca/floof/");
ha.getDogPic;

ha.getFoxPic;
