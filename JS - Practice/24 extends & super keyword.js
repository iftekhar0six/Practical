class Animal {
    constructor(name, clr) {
        this.name = name;
        this.clr = clr;
    }
    color() {
        console.log(`The name of animal is ${this.name} and color is ${this.clr}`)
    }
    text() {
        console.log(`This is simple text`)
    }
}
class Monkey extends Animal { // Using "extends" keyword we can use Animal class's methods

    // constructor(...arguments) {  // if there is no constructor, then it creates automatically
    //     super(...arguments) // It is mendatory to call "super" constructor before using "this" method
    // }
    eat() {
        console.log(`${this.name} is eating Banana`)
    }
    color() { // we can override the parents class method
        // super.color() // Using "super" keyword we can also execute parent class method
        super.text()
        console.log("success")
    }
}
let m = new Monkey("Monkey", "Orange")
m.color()