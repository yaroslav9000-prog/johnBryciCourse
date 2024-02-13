class Cinema{
    
    private cinemaName:String ='';
    private seatNum:number =0;
    private openHour:number=0;
    private closeHour:number=0;
    
    constructor(cinemaName:String, seatNum:number, openHour:number, closeHour:number){
        this.setCinemaName =cinemaName;
        this.setSeatNum = seatNum;
        this.setOpenHour = openHour;
        this.setCloseHour = closeHour;
    }

    public set setCinemaName(cinemaName: String){
        if(cinemaName.length > 0){
        this.cinemaName = cinemaName;
        }
    }
    public set setSeatNum(seatNum: number){
        if(seatNum > 0){
        this.seatNum = seatNum;
        }
    }
    public set setOpenHour(openHour: number){
        if(openHour >= 6 && openHour <= 12){
        this.openHour = openHour;
        }
    }
    public set setCloseHour(closeHour: number){
        if(closeHour >= 18 && closeHour<= 23 ){
            this.closeHour = closeHour;
        }
    }
    public get getCinemaName():String{
        return this.cinemaName;
    }
    public get getSeatNum():number{
        return this.seatNum;
    }
    public get getOpenHour():number{
        return this.openHour;
    }
    public get getCloseHour():number{
        return this.closeHour;
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
shadyCinema.setSeatNum = 1000;
console.log(shadyCinema.getSeatNum);