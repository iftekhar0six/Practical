// let p = fetch("https://goweather.herokuapp.com/weather/NY") // "fetch" returns the promise value

// p.then((response) => {
//     console.log(response.status)
//     console.log(response.ok)
//         // console.log(response.text()) // Method only used once (json,text,formData etc...)
//     return response.json()
// }).then((value) => {
//     console.log(value)
// });

// using async await instead of ".then"

const api = async(todo) => {
    let option = {
        method: 'POST',
        header: {
            "CONTENT-TYPE": "application/json"
        },
        body: JSON.stringify(todo)
    }

    let p = await fetch('https://jsonplaceholder.typicode.com/posts', option)
    let response = await p.json()
    return response
}

const main = async() => {
    let todo = {
        title: 'foo',
        body: 'bar',
        userId: 1
    }
    let res = await api(todo)
    console.log(res)
}

main()