let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is resolved successfully")
        }, 2000)
    })
}

(async() => { // IIFE --> Immediately Invoked Function Expression
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})()