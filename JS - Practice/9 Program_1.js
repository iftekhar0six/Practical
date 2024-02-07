// Guess the Random number

let number = Math.floor(Math.random() * 100) + 1
let chances = 0
for (let i = 0; i < 100; i++) {
    let guess = prompt(`Enter the Number`)
    guess = Number.parseInt(guess)
    if (guess == number) {
        console.log(`Congratulations!\nYour number is ${number}\nYour Score is ${100-chances}`)
        break
    } else if (guess < number) {
        console.log(`You have to increase your Number\nYou Entered ${guess}`)
        chances++
    } else {
        console.log(`You have to decrease your Number\nYou Entered ${guess}`)
        chances++
    }
}