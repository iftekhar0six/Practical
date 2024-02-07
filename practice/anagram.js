let str1 = "listen"
let str2 = "silent"

let count = 0

if(str1.length == str2.length){
    for(let x of str1){
        for(let y of str2){
            if(x == y){
                count ++
            }
        }
    }
    if(count == str1.length){
        console.log("This string is Anagram")
    }
    else{
        console.log("This string is not Anagram")
    }
}
else{
    console.log("This string is not Anagram")
}