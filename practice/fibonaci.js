// let n = 8
// let num1 = 0
// let num2 = 1
// let sum

// console.log(num1)
// console.log(num2)

// for (let i = 0; i < n - 2; i++) {
//     sum = num1 + num2
//     num1 = num2
//     num2 = sum
//     console.log(sum)
// }



const k = 24
let n1 = 0, n2 = 1, nextterm

for(i = 1; i <= k; i++){
    console.log(n1)
    nextterm = n1 + n2
    n1 = n2 
    n2 = nextterm
}

