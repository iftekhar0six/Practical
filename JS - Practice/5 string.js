let name = `Akshay` // Use ( ` ) for String. It's an Advance Technique
let name1 = `      Israr      `

console.log(`My name is ${name}`)
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2, 4)) // Use to cut the String
console.log(name.slice(2))
console.log(name.replace(`Ak`, `Vk`)) // It is a Case-Sensitive
console.log(name.concat(` is a IT Engineer`)) // or
console.log(name + ` is a IT Engineer `)
console.log(name1.trim()) // Use to niglate Speces

for (let i = 0; i < name.length; i++) {
    const a = name[i];
    console.log(a)
}