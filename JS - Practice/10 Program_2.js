// const char = `SWG`  // Use to select a Random Character
//     // const charLength = char.length
// let comp = char.charAt(Math.floor(Math.random() * char.length))
// console.log(comp)

const str = ['Stone', 'Paper', 'Seasor'] // Use to select a Random String
    // const strLength = str.length
let computer = str[Math.floor(Math.random() * str.length)]
    // console.log(computer)

let player
while (true) {
    player = prompt("Enter Your Choice")
    if (player != "Stone") {
        if (player != "Seasor") {
            if (player != "Paper") {
                alert("Invalid")
            } else {
                break
            }
        } else {
            break
        }
    } else {
        break
    }
}

if (computer == player) {
    console.log(`Computer's choice is ${computer}\nPlayer's choice is ${player}\nMatch has Draw!`)
} else {
    if (player == "Stone") {
        if (computer == "Seasor") {
            console.log(`Computer's choice is ${computer}\nPlayer's choice is ${player}\nPlayer has Won!`)
        } else {
            console.log(`Computer's choice is ${computer}\nPlayer's choice is ${player}\nComputer has Won!`)
        }
    }
    if (player == "Seasor") {
        if (computer == "Paper") {
            console.log(`Computer's choice is ${computer}\nPlayer's choice is ${player}\nPlayer has Won!`)
        } else {
            console.log(`Computer's choice is ${computer}\nPlayer's choice is ${player}\nComputer has Won!`)
        }
    }
    if (player == "Paper") {
        if (computer == "Stone") {
            console.log(`Computer's choice is ${computer}\nPlayer's choice is ${player}\nPlayer has Won!`)
        } else {
            console.log(`Computer's choice is ${computer}\nPlayer's choice is ${player}\nComputer has Won!`)
        }
    }
}