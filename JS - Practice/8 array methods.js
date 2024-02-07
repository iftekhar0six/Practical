let ar1 = [93, 3, 8, 3, 38, 68]
    // console.log(ar1)

// Array map() method
let ar2 = ar1.map((x) => { // It's work like a Loop
        // console.log(x)
        return x * 2
    })
    // console.log(ar2) // Give Return in map() for print the Values

// Array filter() method
let ar3 = ar1.filter((a) => {
        return a < 10
    })
    // console.log(ar3)

// Array reduce() method
let ak = ar1.reduce((a, b) => { // It's Returns the Value
    return a + b
})
console.log(ak)