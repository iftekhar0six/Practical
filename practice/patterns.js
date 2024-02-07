// for(let i = 0; i < 5; i++) {
//     for(let j = 0; j < i+1; j++) {
//         process.stdout.write('*')
//     }
//     console.log('')
// }

// const size = 5;
// for (let i = 1; i <= size; i++) {
//   for (let j = 1; j <= size; j++) {
//     if (i === 1 || i === size || j === 1 || j === size) {
//       process.stdout.write('*');
//     } else {
//       process.stdout.write(' ');
//     }
//   }
//   console.log(" ")
// }

// let height = 5
// let sp = 0
// for (let i = height; i > 0; i--) {
//     let spaces = ' '.repeat(sp)
//     let stars = '*'.repeat(i);
//     console.log(spaces + stars);
//     sp++
// }

let n = 6
for(let i=1; i < 2*n; i++) {
    let patt = n >= i ? i : 2*n - i
    let stars = '*'.repeat(patt)
    console.log(stars)
}