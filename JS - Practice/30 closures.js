function init() {
    let a = 10 // Initial value

    function print() { // closure function involves lexical environment
        console.log(a) // "a" is just a reference
    }

    a = 20 // Updated value

    return print
}

let a = init()
a()