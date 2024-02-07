let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 1 is running...");
    }, 1000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 is running...");
    }, 500)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 is running...");
    }, 3000)
})


// Promise APIs

// let promiseAll = Promise.all([p1, p2, p3])  // Give result when all promises are resolved
// let promiseAll = Promise.allSettled([p1, p2, p3])  // Give result however any promise is not resolved
// let promiseAll = Promise.race([p1, p2, p3])  // Give first completed result(resolved/rejected)
let promiseAll = Promise.any([p1, p2, p3]) // Give first completed result(resolved)
promiseAll.then((value) => {
    console.log(value)
})