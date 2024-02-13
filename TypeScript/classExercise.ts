class Person{
    private name: String;
    private age: number;
    private birthYear: number;

    constructor(name:String, age:number){
        this.name = name;
        this.age = age;
        this.birthYear=0;
    }
    private getYear():number{
        let newDate = new Date();
        this.birthYear = newDate.getFullYear() - this.age;
        return this.birthYear;
    }

    public getName():String{
        return this.name;
    }

    public getAge():Number{
        return this.age;
    }
    public getBirthYear():Number{
        return this.getYear();
    }

}
let yarik = new Person("Yaroslav", 25);
console.log(yarik.getAge());