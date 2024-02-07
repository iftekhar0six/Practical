let n = 5

function prime(number){
    if(number <= 1){
        console.log("This is not a prime number")
    }

    for(let i = 2; i < number; i++){
        if(number % i == 0){
            return  console.log("This is not a prime number") 
        }
    }
    return console.log("This is a prime number")
}

prime(n)