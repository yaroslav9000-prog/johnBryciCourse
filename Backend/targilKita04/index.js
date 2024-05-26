

const generateCode = ()=>{
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let letter;
    let myCode = '';
    for(let index = 0; index < 5; index++){
        letter = alphabet[Math.floor(Math.random()* alphabet.length)];
        myCode+= letter;
    }
    return myCode;
}
console.log(generateCode());