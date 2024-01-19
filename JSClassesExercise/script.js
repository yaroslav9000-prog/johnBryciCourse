class Shape{
    constructor(x, y, color){
        this.setX = x;
        this.setY = y;
        this.setColor = color;
    }
    DistanceFromCenter(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    toString(){
        return `x=${this.x},y=${this.y}, Color=${this.color}`;
    }
    set setX(x){
        this.x = x;
    }
    set setY(y){
        this.y = y;
    }
    set setColor(color){
        this.color = color;
    }
}
let shape = new Shape(2, 3, "red");
// console.log(shape);
// console.log(shape.DistanceFromCenter());

class Circle extends Shape{
    constructor(x, y, color, radius){
        super(x, y, color);
        this.setRadius = radius;
    }
    set setRadius(radius){
        this.radius = radius;
    }
    toString(){
        return `${super.toString()}, Radius=${this.radius}`;
    }
    static Pi = 3.14;
    get getArea(){
        return Circle.Pi * (this.radius * this.radius);
    }
    get Circumference(){
        return 2*Circle.Pi*this.radius;
    }
}
let circle = new Circle(20, 50, "red", 10);
console.log(circle.toString());
console.log(circle.DistanceFromCenter());
console.log(circle.getArea);
console.log(circle.Circumference);
console.log(Circle.Pi)