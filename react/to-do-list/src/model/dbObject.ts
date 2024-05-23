export class jsonObject{
    public tasks: item[];
    constructor(tasks: item[]){
        this.tasks = tasks;
    }
}
export class item{
    public id: number;
    public date: string;
    public text: string;
    public done: boolean;
    constructor(id: number, date: string, text: string, done: boolean){
        this.id = id;
        this.date = date;
        this.text = text;
        this.done = done;
    }
}