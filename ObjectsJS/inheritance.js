class Animal{
    constructor(name, sound, eats){
        this.name = name;
        this.sound = sound;
        this.eats = eats;
        this.isAlive = true;
    }
    static getName = ()=>{
        return this.name;
    }
    static getIsAlive =()=>{
        return this.isAlive;
    }
    static getEats = ()=>{
        return ;
    }
    static getSound = ()=>{
        return this.sound;
    }
    
}
const myAnimal = new Animal("pidaras", "pipi", "bananass");
console.log(myAnimal.getEats);
class Lion extends Animal{
    constructor(name, sound, eats){
        super(name, sound, eats)
    }

}