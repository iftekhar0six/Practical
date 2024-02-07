let num = 48
let arr = []

let ch = 0

for(let i = 0; i < num; i++){
    if(num % i == 0){
        arr[ch++] = i
    }
}

let res = arr[0]

for(let i = 1; i < arr.length; i++){
    res = res + arr[i]
}

if(res == num){
    console.log('This is a perfect number')
}else{
    console.log('This is not a perfect number')
}