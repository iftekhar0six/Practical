let f = () => {
    try {
        // console.log(done)
        console.log('done')
        return
    } catch (error) {
        console.log('there was an error')
    } finally { // finally runs at every situation
        console.log('run successful')
    }
};
f()
console.log('End');