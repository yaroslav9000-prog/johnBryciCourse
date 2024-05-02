export class Car{
    private manufacturer : String;
    private model: String;
    private engine: String;
    private carColor: String;
    private prodYear: number;
    constructor(manufacturer: String, model: String, engine: String, carColor: String, prodYear: number){
        this.manufacturer =manufacturer;
        this.model = model;
        this.engine = engine;
        this.carColor = carColor;
        this.prodYear = prodYear;
    }
    get getManufacturer(){
        return this.manufacturer;
    }
    get getModel(){
        return this.model;
    }

    get getEngine(){
        return this.engine;
    }
    
    get getCarColor(){
        return this.carColor;
    }
    
    get getProdYear(){
        return this.prodYear;
    }
}