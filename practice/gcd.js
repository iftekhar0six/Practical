// let num1 = prompt("Enter number1: ");
// let num2 = prompt("Enter number2: ");
let num1 = 15
let num2 = 25

let max = 0
let min = 0

if(num1 < num2){
    max = num2
    min = num1
}else{
    max = num1
    min = num2
}

function gcd(min, max){

    let reminder = 1

    while(reminder != 0){
        reminder = max % min
        max = min
        min = reminder
    }
    return max
}

let res = gcd(min, max)

console.log(res)