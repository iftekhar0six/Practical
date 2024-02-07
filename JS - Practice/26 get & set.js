class Animal {
    constructor(name) {
        this._name = name;
    }

    fly() {
        console.log(`Animal ${this._name} cannot be fly`);
    }

    get name() { // Using "get" keyword we can access private properties
        return this._name;
    }

    set name(newName) { // Using "set" keyword we can set a new value
        this._name = newName;
    }
}

let res = new Animal("Dog");
// res.fly()
console.log(res.name)
res.name = "Parrot" // We can set the value using object
console.log(res.name)