export class todo{
    public taskText: String;
    public taskDate: String;
    public isTaskCompleted: boolean;

    constructor(text: String, date: String, isCompleted: boolean){
        this.taskText = text;
        this.taskDate = date;
        this.isTaskCompleted = isCompleted;
    }
}