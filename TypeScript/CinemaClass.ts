class Cinema{
    private cinemaName: String;
    private seatNum: number;
    private openHour: number;
    private closeHour: number;
    
    constructor(cinemaName: String, seatNum: number, openHour: number, closeHour: number){
        
    }

    set setCinemaName(cinemaName: String){
        if(cinemaName.length > 0){
        this.cinemaName = cinemaName;
        }
    }
    set setSeatNum(seatNum: number){
        if(seatNum > 0){
        this.seatNum = seatNum;
        }
    }
    set setOpenHour(openHour: number){
        if(openHour >= 6 && openHour <= 12){
        this.openHour = openHour
        }
    }
    set setCloseHour(closeHour: number){
        if(closeHour >= 18 && closeHour<= 23 ){
            this.closeHour = closeHour;
        }
    }
    get getCinemaName():String{
        return this.cinemaName;
    }
    get getSeatNum():number{
        return this.seatNum;
    }
    get getOpenHour():number{
        return this.getOpenHour;
    }
    get getCloseHour():number{
        return this.getCloseHour;
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