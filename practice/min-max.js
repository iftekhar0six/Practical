let arr = [1,3,5,7,9]

let compare = (a,b) => {
    return a-b
}

let array = arr.sort(compare)
let len = array.length

let min = 0
let max = 0

for(let i = 0; i < len - 1; i++) {
    min += arr[i]
}
for(let i = 1; i < len; i++) {
    max += arr[i]
}

console.log(min, max)