let arr = [-4, 3, -9, 0, 4, 1]
let len = arr.length

let parr = []
let ch1 = 0
let oarr = []
let ch2 = 0
let narr = []
let ch3 = 0

for(let i = 0; i < len; i++){
    if(arr[i] == 0){
        oarr[ch2++] = arr[i]
    }else if(arr[i] < 0){
        narr[ch3++] = arr[i]
    }else{
        parr[ch1++] = arr[i]
    }
}

let positives = (parr.length / len).toFixed(6)
let zeros = (oarr.length / len).toFixed(6)
let negatives = (narr.length / len).toFixed(6)

console.log(positives)
console.log(zeros)
console.log(negatives)