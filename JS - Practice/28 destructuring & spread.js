let arr1 = [1, 4, 5, 6, 7]
// No need to do this
// let a = arr[0]
// let b = arr[1]
let [a, b, ...rest] = arr1 // Destructuring Array
// console.log(a, b, rest)
let arr2 = { // Destructuring Object
    c: 1,
    d: 2
}
let { c, d } = arr2
// console.log(c, d)
// Spread operator
let arr3 = [10, 20, 30] // Convert array to object
let obj = {...arr3 }
    // console.log(obj)

let sum = (v1, v2, v3) => {
        return v1 + v2 + v3
    }
    // console.log(sum(...arr3))

let obj1 = {
    name: "Akshay",
    Enroll: 122,
    sem: 6
}
console.log({...obj1, name: "Vivek" }) //Change some value and print whole object as same