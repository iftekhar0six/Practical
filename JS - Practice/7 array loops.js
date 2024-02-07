let ar1 = [1, 65, 3, 34, 28, 15, 63]

// Simple For Loop
for (let i = 0; i < ar1.length; i++) {
    // console.log(ar1[i])
}

// ForEach Loop
ar1.forEach((element) => {
    // console.log(element) 
})

// Array.from
let str1 = `Akshay`
let ar2 = Array.from(str1) // Used to convert in Array from Object
    console.log(ar2)

// For...of Loop
for (const i of ar1) {
    console.log(i)
}

// For...in Loop
for (const i in ar1) {
    console.log(ar1[i])
}