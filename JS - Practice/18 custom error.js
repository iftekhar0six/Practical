// There are two main Properties
// 1) name
// 2) message

try {
    throw new ReferenceError("code is not running") // we can throw an error using "throw" keyword
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}