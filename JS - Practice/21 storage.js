// Cookies

let key = prompt("Enter the Key")
let value = prompt("Enter the Value")

document.cookie = "user=Akshay" // cookies are always adds new cookie
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(`The value of ${key} is ${value}`)
console.log(document.cookie)


// Local Storage Methods

// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.removeItem(key)
// localStorage.clear()
// localStorage.length

// window.onstorage = () => {  // We can set aleart for any changes in localStorage
//     aleart('Changed storage')
// }


// Session storage 

// Metods are same as local Storage