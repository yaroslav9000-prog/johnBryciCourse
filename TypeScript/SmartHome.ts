class SmartHome{
    private _address!: String;
    public static devicesNum: number;
    public static currentState: number;

    constructor(address: String){
        this.setAddress = address;
        SmartHome.currentState =0;
        SmartHome.devicesNum = 0;
    }
    set setAddress(value: String){
        if(value.length > 5){
            this._address = value;
            return;
        }
        console.log("invalid Address");

    }
}
class Device {
    private _deviceName!: String;
    private _coords!: String;
    private _number!: number;

    constructor(deviceName:String, coords: String, number: number){
        this.setDeviceName = deviceName;
        this.setCoords = coords;
        this.setNumber = number;
        SmartHome.devicesNum ++;
    }
    set setDeviceName(value: String){
        if(value.length> 0){
            this._deviceName = value;
            return;
        }
        console.log("Name should be bigger");
    }
    set setCoords(value: String){
        this._coords = value;
    }
    set setNumber(value: number){
        if(value > 150 || value < 10){
            console.log('number should be in range 10-150');
            return;
        }
        this._number = value;
    }

}
class EndPoint{
    private _name!: String;
    private _number!: number;

    constructor(name:String, number: number){
        this.setName = name;
        this.setNumber = number;
    }
    set setName(value: String){
        if(value.length> 1){
            this._name = value;
            return;
        }
        console.log("the name should be bigger");
    }
    set setNumber(value: number){
        if(value > 13 || value < 1){
            console.log("Number should be in range 1-13");
            return;
        }
        this._number = value;
    }
}