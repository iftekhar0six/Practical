let a = [1, 35, "ak", true] // Create an Array
    // console.log(a)

// Methods in Arrays
let b = a.toString() // Convert Array to String
    // console.log(b)

let c = a.join("-") // Remove the Comma and add anything which is present in Parantheses
    // console.log(c)

let d = a.pop() // Remove The last element from Original Array
    // console.log(d) // It returns the Popped Element
    // console.log(a)

let e = a.push(5) // Add new element in back of the Original Array
    // console.log(e) // It returns the new Array Length
    // console.log(a)

let f = a.shift() // It removes the first element from Original Array
    // console.log(f) // It returns the Popped Element
    // console.log(a)

let g = a.unshift(67) // Add new element in Strarting of an Original Array
    // console.log(g) // It returns the new Array Length
    // console.log(a)

let h = delete a[0] // Used for Delete any element in Array but Length can not effect
    // console.log(a.length)
    // console.log(a)

let n1 = [1, 42, 3, 4, 25, 26, 77, 8, 39]
let n2 = [11, 12, 13, 14, 15, 16, 17, 18, 19]

let n3 = n1.concat(n2) // Used for Concate the two Array
    // console.log(n3)

// let i = n1.sort() // Sort the Array in Alphabetical Manner
    // console.log(i) // It Sorts the Original Array

// If I want to Sort this Array in Ascending Order
const compare = (a, b) => {
    return a - b
}
// let j = n1.sort(compare)
    // console.log(j)

// let k = n1.reverse() // Used to Reverse the Array Elements 
    // console.log(k)

// splice(Starting Index, How many want to Remove, New Elements)
let l = n1.splice(2, 4, 1111, 2222, 3333,223,23,4,43,43254,234) // Splice is used to modify the Array
// console.log(l) // It will returns the Deleted Element's Array
// console.log(n1)