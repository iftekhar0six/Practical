let a = {
        name: 'Akshay',
        language: 'JavaScript',
        // run: () => {
        //     console.log('this is internal run')
        // }
    }
    // console.log(a)
    // a.run()

let p1 = {
    // run: () => {
    //     console.log('this is run1')
    // }
}

let p2 = {
    run: () => {
        console.log('this is run2')
    }
}

a.__proto__ = p1 // Prototypal Inheritance
p1.__proto__ = p2

a.run()