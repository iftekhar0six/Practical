let str = "A man, a plan, a canal, Panama"

str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
// console.log(str)

let revstr = str.split("").reverse().join("")

if(str == revstr) return console.log("String is palindrome")
else return console.log("String is not palindrome")