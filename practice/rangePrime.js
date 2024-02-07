let min = 34
let max = 100

let res = []
let n = 0

for(let i = min; i <= max; i++){

    function val(min){
        for(let j = 2; j < min; j++){
            if(min % j == 0){
                return 0
            }
        }
        return res[n++] = min
    }
    val(i)
}
console.log(res)