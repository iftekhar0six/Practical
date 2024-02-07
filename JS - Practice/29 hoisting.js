// let a;
// Following two lines will run successfully due to JavaScript hoisting

console.log(a)
nice()

function nice() {
    console.log("Nice to meet you!")
}

var a = 10 // Declration hoisting to the top but initializing is not
console.log(a)