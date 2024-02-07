let seconds = document.getElementById('seconds')
let minutes = document.getElementById('minutes')
let hours = document.getElementById('hours')

function time() {
    let c = new Date()
    let s = c.getSeconds()
    let m = c.getMinutes()
    let h = c.getHours()
    seconds.innerHTML = s
    minutes.innerHTML = m
    hours.innerHTML = h
}

setTimeout(time, 0)
setInterval(time, 1000)