function loadScript(src, callback) {
    // console.log("Successfully loaded script");
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, src);
    script.onerror = () => callback(new Error(), null);
    document.body.appendChild(script);
}

function hello(error, script) {
    if (error) {
        console.error("Error loading")
    } else {
        console.log("Script loaded successfully", script);
    }
}


loadScript("1 print.js", hello)