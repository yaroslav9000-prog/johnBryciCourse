class Cinema{
    
    private _cinemaName:String ='';
    private _seatNum:number =0;
    private _openHour:number=0;
    private _closeHour:number=0;
    
    constructor(cinemaName:String, seatNum:number, openHour:number, closeHour:number){
        this.cinemaName =cinemaName;
        this.seatNum = seatNum;
        this.openHour = openHour;
        this.closeHour = closeHour;
    }

    public set cinemaName(cinemaName: String){
        if(cinemaName.length > 0){
        this._cinemaName = cinemaName;
        }
    }
    public set seatNum(seatNum: number){
        if(seatNum > 0){
        this._seatNum = seatNum;
        }
    }
    public set openHour(openHour: number){
        if(openHour >= 6 && openHour <= 12){
        this._openHour = openHour;
        }
    }
    public set closeHour(closeHour: number){
        if(closeHour >= 18 && closeHour<= 23 ){
            this._closeHour = closeHour;
        }
    }
    public get getCinemaName():String{
        return this._cinemaName;
    }
    public get getSeatNum():number{
        return this._seatNum;
    }
    public get getOpenHour():number{
        return this._openHour;
    }
    public get getCloseHour():number{
        return this._closeHour;
    }
    public workingHours():number{
        return this.getCloseHour - this.getOpenHour;
    }
    public print():void{
        console.log(`Cinema name: ${this.getCinemaName}, Opening hour: ${this.getOpenHour}, Closing hour: ${this.getCloseHour}, Seats number: ${this.getSeatNum}`)
    }
}

const shadyCinema = new Cinema("M&M", 250, 11, 21);
console.log(shadyCinema.getCinemaName);
console.log(shadyCinema.getCloseHour);
console.log(shadyCinema.getOpenHour);
console.log(shadyCinema.getSeatNum);
shadyCinema.print();
shadyCinema.seatNum = 1000;
console.log(shadyCinema.getSeatNum);