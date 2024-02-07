let num = 2543288
let res = ''

let number = num.toString()

let sum = parseInt(number[0])

for(let i = 1; i < number.length; i++){
    if(sum >= 0){
        let n = parseInt(number[i])
        sum -= n
        res += "-"
    }else{
        let n = parseInt(number[i])
        sum += n
        res += "+" 
    }
}

if(sum == 0){
    console.log(res)
}else{
    console.log("sum = ", sum)
    console.log("Not Possible")
}