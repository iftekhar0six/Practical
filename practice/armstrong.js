let num = 153
let number = num.toString()
let len = number.length

let res = 0

for(let i = 0; i < len; i++){
    let n = parseInt(number[i])
    res += Math.pow(n, len)                        //pow() is used to calculate the power of a given number
}

if(num == res){
    console.log("This number is Armstrong")
}else{
    console.log("This number is not Armstrong")
}