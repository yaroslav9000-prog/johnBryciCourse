function Dog(name){
    this.name = name;
    this.woof = ()=>{
        console.log("Woof woof!!!");
    }
}
var myDog = new Dog("Butch");
myDog.woof();