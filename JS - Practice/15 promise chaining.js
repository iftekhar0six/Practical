let p1 = new Promise((resolve, reject) => {
    // console.log("In promise")
    // resolve(true);
    setTimeout(() => {
        console.log("Promise 1 is running...");
        resolve(true);
    }, 3000)
})

p1.then((value) => {
    console.log(value)
    let p2 = new Promise((resolve, reject) => {
        // console.log("In promise")
        // resolve(true);
        setTimeout(() => {
            console.log("Promise 2 is running...");
            resolve(true);
        }, 3000)
    })

    return p2
}).then((value) => {
    console.log(value)
    return 2
}).then((value) => {
    console.log(value)
    return value
}).then((value) => {
    console.log(value)
}).catch((err) => {
    console.error("some error occurred")
})