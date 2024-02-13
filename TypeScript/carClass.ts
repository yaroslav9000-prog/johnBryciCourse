class Car{
    private licenseNum:String;
    private manufacturer:String;
    private model:String;
    private color:String;
    private prodYear:number;
    private engine: String;
    private currentSpeed:number= 0;
    constructor(licenseNum:String, manufacturer:String, model:String, 
        color:String, prodYear:number, engine:String){
            this.licenseNum = licenseNum;
            this.manufacturer = manufacturer;
            this.model = model;
            this.color = color;
            this.prodYear = prodYear;
            this.engine = engine;
            
    }
    public setLicenseNumber(licenseNum:String):void{
        this.licenseNum = licenseNum;
    }
    public setManufacturer(manufacturer:String):void{
        this.manufacturer = manufacturer;
    }
    public setModel(model:String):void{
        this.model = model;
    }
    public setColor(color:String):void{
        this.color = color;
    }
    public setProdYear(prodYear:number):void{
        this.prodYear = prodYear;
    }
    public setEngine(engine:string):void{
        this.engine = engine;
    }
    public setCurrentSpeed(currentSpeed:number):void{
        this.currentSpeed = currentSpeed;
    }
    public getLicenseNumber():String{
        return this.licenseNum;
    }
    public getManufacturer():String{
        return this.manufacturer;
    }
    public getModel():String{
        return this.model;
    }
    public getColor():String{
        return this.color;
    }
    public getProdYear():number{
        return this.prodYear;
    }
    public getEngine():String{
        return this.engine;
    }
    public getCurrentSpeed():number|undefined{
        return this.currentSpeed;
    }
    public faster(someSpeed:number):String{
        return `You reached the speed of ${this.currentSpeed+= someSpeed}`;
    }
    public slower(someSpeed:number):String{
        return `You reached the speed of ${this.currentSpeed -= someSpeed}`;
    }
    public stop():String{
        return `You reached your final destination`;
    }
    public toString():String{
        return `License number: ${this.getLicenseNumber()}, 
        Manufacturer: ${this.getManufacturer()}
        Model: ${this.getModel()},
        Color ${this.getColor()}, 
        Production year: ${this.getProdYear()},
        Engine type: ${this.getEngine()};
        `;
    }
}
const supra = new Car("75-587-45", "Toyota", "Supra", "Black", 2021, "v8");
console.log(supra.toString());