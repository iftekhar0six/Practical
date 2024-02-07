class Animal {
    constructor(name) {
        this.name = Animal.capitalize(name); // static function always called with class name
    }

    walk() {
        console.log(`Animal ${this.name} is walking`);
    }

    static capitalize(name) { // Using "static" keyword we can create static functions
        name = name.charAt(0).toUpperCase() + name.substr(1, name.length)
        return name
    }
}

let res = new Animal("dog")
    // res.capitalize(vivek) // cannot use static functions with object
res.walk()