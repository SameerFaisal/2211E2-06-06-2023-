export class Shape{
    name
    color
    constructor(name,color){
        this.name=name
        this.color=color
    }

    displayDetails(){
        console.log(`this is a ${this.color} colored ${this.name}`)
    }
}


export class Circle extends Shape{
radius
constructor(name,color,radius){
    super(name,color)
    this.radius=radius
}
calcArea(){
    let area=(22/7)*(this.radius**2)
    super.displayDetails()
    console.log(`Area of circle is ${area}`)
}
}

export class Rectangle extends Shape{
length
breadth
constructor(name,color,length,breadth){
    super(name,color)
this.length=length
this.breadth=breadth
}
calcArea(){
let area=this.length*this.breadth
super.displayDetails()
console.log(`Area of rectangle is ${area}`)

}
}

