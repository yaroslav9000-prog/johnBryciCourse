class Salary{
    constructor(employName, employSalary){
        this.employName = employName;
        this.employSalary = employSalary;
    }

    maaser(){
        return this.employSalary * 0.1;
    }
    afterTaxes(){
        return this.employSalary * 0.75;
    }
    get getName(){
        return this.employName;
    }
    get getSalary(){
        return this.employSalary;
    }
}
const yohai = new Salary("yohai", 10000);
const barbi = new Salary("Artemy", 1200000);
const gucci = new Salary("Gucci", 1000);
console.log(gucci.maaser());
console.log(gucci.afterTaxes());
console.log(gucci.getName);
console.log(gucci.getSalary);
