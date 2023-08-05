const delayedColorChange = (color, delay) => { 
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

async function rainbow() {
    await delayedColorChange('red', 1000) //the await keyword waits for a promise to be resolved
    await delayedColorChange('orange', 1000) //this makes the code even cleaner, we don't even need the .then
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return 'All Done!' //we can then return a promise
}

// rainbow().then(() => {
//     console.log('end of rainbow')
// })

async function printRainbow() {
    await rainbow();
    console.log('end of rainbow')
}

printRainbow();