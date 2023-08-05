const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

fakeRequestPromise('yelp.com/api/coffee/page1') //with this method, the code is a lot nicer
    .then((data) => {
        console.log('it worked (page 1)!')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2') //rather than nesting the callbacks
    })
    .then((data) => { //we can chain them sequentially
        console.log('it worked (page 2)!')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log('it worked (page 3)!')
        console.log(data)
    })
    .catch((err) => { //and we can use one catch for the whole set
        console.log('Error!')
        console.log(err)
    })