export class Todo{

    private text: String;
    private done : boolean;
    private date : String;
    constructor(text: String, date: String, done: boolean){
        this.text = text;
        this.done = done;
        this.date = date;
    }

    
    get getTEXT(){
        return this.text;
    }
    get getDONE(){
        return this.done;
    }
    get getDate(){
        return this.date;
    }
    set setDONE(value: String){
        this.done =  !this.done; 
    }
    set setDate(value: String){
        this.date = value;
    }
}