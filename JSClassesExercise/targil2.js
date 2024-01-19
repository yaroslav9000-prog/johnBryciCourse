class Pc{
    constructor(ram, hardMemory, hardDrive, price, guarantyYears){
        this.setRam = ram;
        this.setHardMemory = hardMemory;
        this.setHardDrive = hardDrive;
        this.setPrice = price;
        this.guarantyYears = guarantyYears;
    }
    set setRam(ram){
        if(ram < 4 || ram > 16){
            this.ram = 4;
            return;
        }
        this.ram = ram;
    }
    set setHardMemory(hardMemory){
        if(hardMemory < 200|| hardMemory> 3000){
            this.hardMemory = 200;
            return;
        }
        this.hardMemory = hardMemory;
    }
    set setHardDrive(hardDrive){
        this.hardDrive = hardDrive;
    }
    set setPrice(price){
        if(price < 800 || price > 20000){
            price = "1000000$";
            return;
        }
        this.price = price;
    }
    set setGuaranty(guarantyYears){
        if(guarantyYears > 5 || guarantyYears < 0){
            this.guarantyYears = 0;
        }
        this.guarantyYears = guarantyYears;
    }
    buyGear(){
        return "Buy headphones!!!";
    }
    
    toString(){
        return `ram: ${this.ram}, Hard Memory: ${this.hardMemory}, HardDrive: ${this.hardDrive}, price: ${this.price}, Guaranty Years: ${this.guarantyYears}`;
    }
}
class HomePc extends Pc{
    constructor(ram, hardMemory, hardDrive, price, guarantyYears, isItWired, screenSize){
        super(ram, hardMemory, hardDrive, price, guarantyYears);
        this.setWiredMouse=isItWired;
        this.setScreenSize=screenSize;
    }
    set setWiredMouse(isItWired){
        this.wiredMouse = isItWired; 
    }
    set setScreenSize(num){
        this.screenSize = num;
    }
    buyGear(){
        return "Dont forget to buy yourself a desktop!!!";
    }
    toString(){
        return`${super.toString()}, Are headphones wired? ${this.isItWired}, screen size: ${this.screenSize}`;
    }
}
class PorPc extends Pc{
    constructor(ram, hardMemory, hardDrive, price, guarantyYears, hoursToCharge, batteryPower, isItTouch){
        super(ram, hardMemory, hardDrive, price, guarantyYears);
        this.setHoursToCharge = hoursToCharge;
        this.setBatteryPower = batteryPower;
        this.setIsItTouch = isItTouch;
    }
    set setHoursToCharge(hoursToCharge){
        this.hoursToCharge = hoursToCharge;
    }
    set setBatteryPower(batteryPower){
        this.batteryPower= batteryPower;
    }
    set setIsItTouch(isItTouch){
        this.isItTouch = isItTouch;
    }
    buyGear(){
        return"buy a case for your pc " + super.buyGear();       
    }
    charged(){
        return "Your PC is fully charged.";
    }
    
    toString(){
        return  `${super.toString()},  hours to charge: ${this.hoursToCharge}, battery power: ${this.batteryPower}, is screen touch: ${this.isItTouch}`;
    }

}

// const executeActions = (object)=>{

// }
let newArray = new Array(10);
for(let index = 0; index < newArray.length; index++){
    if(index % 2 == 0){
        newArray[index] = new PorPc(16, 564, "7i", 4500, 7, 1, "100%", true);
    }else{
        newArray[index] = new HomePc(32, 1000, "i9", 10000, 5, true, 32);
    }
}
const executeActions = (piPiska)=>{
    if(piPiska instanceof PorPc){
        console.log(piPiska.buyGear());
        console.log(piPiska.charged());
        console.log(piPiska.toString());
    }else{
        console.log(piPiska.buyGear());
        console.log(piPiska.toString());
    }
    
}
newArray.forEach(item => executeActions(item));