let num = 32;
let res = [];
let count = 0;
let tempRes = 0;

while(num != 1 && num != 0){
    tempRes = num % 2;
    res[count] = tempRes;
    num = Math.floor(num / 2);
    count += 1;
}
res[count] = num

res = res.reverse()

console.log(res);