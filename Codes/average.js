
let arr = [1,2,3,4,5]
console.log(arr)

let sum  = 0;

for(i = 0; i < arr.length; i++){
    sum = sum + arr[i]
}
console.log(sum)
console.log("The average of the numbers is " + sum/arr.length)