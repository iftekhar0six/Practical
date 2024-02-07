class form { // We can create callses using "class" keyword

    constructor(name) {
        console.log("This is a constructor that called automatically")
        this.name = name
    }

    static submit() {
        console.log(`${this.name} Your form has been submitted successfully`)
    }

    cancel() {
            console.log(`${this.name} Your form has been cancelled`)
        }
        // fill(name) {
        //     this.name = name
        // }
}

let ak = new form("Akshay") // Object of  "form" class
    // ak.fill("Akshay")
let vivek = new form("Vivek") // constructor is called automatically when object is created
    // vivek.fill("Vivek")

form.submit()
// vivek.submit()
// vivek.cancel()