async function Akshay() { // async functions use asynchronous
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise 1')
        }, 2000)
    })
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise 2')
        }, 4000)
    })

    let a = await p2 // "await" is wait for completion of promise
    let b = await p1

    return [a, b]
}

let res = Akshay() // async function returning promise

res.then((x) => {
    console.log(x)
})