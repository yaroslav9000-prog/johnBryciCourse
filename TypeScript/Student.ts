class Student{
    public static _totalStudentNum: number=0;
    public static _sumOfGrades: number=0;
    public static listOfSubjets = ["Math", "Programming", "Physics", "History"];
    
    private _name!: String;
    private _subject!: String;
    private _age!: number;
    private _annualGrade!: number;
    
    
    constructor(name: String, subject: String, age: number, annualGrade: number){
        this.setName = name;
        this.setSubject = subject;
        this.setAge = age;
        this.setGrade = annualGrade;
        Student._sumOfGrades += this._annualGrade;
        Student._totalStudentNum ++;
    }
    set setName(value:String){
        if(value.length < 2){
            console.log("enter lengthier name");
            return;
        }
        this._name = value;
    }
    set setSubject(subject:String){
        for(let index = 0; index < Student.listOfSubjets.length; index++){
            if(subject == Student.listOfSubjets[index]){
                this._subject = subject;
                return;
            }
        }
        console.log("unknown subject:", subject);
        this._subject = "n/a";
    }
    set setAge(value:number){
        if(value < 18 || value > 120){
            console.log("Not valid age.");
            return;
        }
        this._age = value;
    }
    set setGrade(value: number){
        if(value < 0 || value > 100){
            console.log("Grade should be between 0 and 100");
            return;
        }
        this._annualGrade = value;
    }
    public printStudentInfo():void{
        console.log(`name: ${this._name}, age: ${this._age}, degree: ${this._subject}, grade: ${this._annualGrade}`);
    }
    public static getStudentsAve():number{
        return Student._sumOfGrades/ Student._totalStudentNum;
    } 
}


let yarik = new Student("Yaroslav", "Math", 25, 90);
let gabriel = new Student("Gabriel", "Computer science", 30, 100);
let ofir = new Student("Ofir", "History", 25, 80);
let matti = new Student("Matti", 'Math', 29, 75);
let yarden = new Student("Yarden", 'philosophy', 25, 100);
yarik.printStudentInfo();
matti.printStudentInfo();
console.log(Student.getStudentsAve());