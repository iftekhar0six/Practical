let arr = [1,4,2,6,2,7,4,3,3,5,2,4]

let res = []

for(let x of arr){
    if(!res.includes(x)){
        res.push(x)
    }
}

console.log(res)