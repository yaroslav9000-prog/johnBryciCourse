export class Todo{
    private id : number;
    private text: String;
    private date : String;
    public done : boolean;
    constructor(id: number, text: String, date: String, done: boolean){
        this.id = id;
        this.text = text;
        this.done = done;
        this.date = date;
    }

    get getID(){
        return this.id;
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
    set setID(value: number){
        this.id = value;
    }
    set setDate(value: String){
        this.date = value;
    }
}