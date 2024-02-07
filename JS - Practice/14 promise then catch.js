let p1 = new Promise((resolve, reject) => {
    // console.log("In promise")
    // resolve(true);
    setTimeout(() => {
        console.log("Promise 1 is running...");
        // reject(new Error("not running"));
        resolve(true);
    }, 3000)
})
let p2 = new Promise((resolve, reject) => {
    // console.log("In promise")
    // resolve(true);
    setTimeout(() => {
        console.log("Promise 2 is running...");
        resolve(true);
    }, 5000)
})

// // console.log(p)

// p2.then((value) => {
//     console.log(value)
//     console.log(p2)
// })

// p1.catch((error) => {
//     console.log(error)
//     console.log(p1)
// })

// method 1 to print the promise object
// p1.then(() => {
//     console.log("done")
// }, (err) => {
//     console.log(err)
// })

// method 2 to print the promise object
// p1.then(() => {
//     console.log("done")
// }).catch((err) => {
//     console.log(err)
// })

// we can use multiple "then" at a time to run multiple events simultaneously
p2.then(() => {
    setTimeout(() => {
        console.log("Promise 2 is running first");
    }, 3000)
})
p2.then(() => {
    setTimeout(() => {
        console.log("Promise 2 is running second");
    }, 4000)
})
p2.then(() => {
    setTimeout(() => {
        console.log("Promise 2 is running third");
    }, 4000)
})
p2.then(() => {
    setTimeout(() => {
        console.log("Promise 2 is running fourth");
    }, 2000)
})