const fakeRequest = (url) => {
    return new Promise((resolve, reject) => { //to create a promise, you pass in a function where there is two parameters
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7) {
                resolve('your fake data here'); //the first is a function that will resolve the promise
            }
            reject('request error') //the other is a function that will reject it
        }, 1000)
    })
}

fakeRequest('dogs/1')
    .then((data) => {
        console.log('done with request')
        console.log(`data is: ${data}`)
    })
    .catch((err) => {
        console.log('oh no', err)
    })


const delayedColorChange = (color, delay) => { //using code we attempted earlier using callbacks
    return new Promise((resolve, reject) => { //we don't need to reject this promise
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000) //we can see how much cleaner and readable it is when we use promises
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))