const fakeRequestPromise = (url) => { //this version using promises only requires you to pass in a url
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

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => { //with promises you can attach functions, then if the promise is resolved
        console.log('it worked (page 1)!');
        fakeRequestPromise('yelp.com/api/coffee/page2')
            .then(() => {
                console.log('it worked (page 2)!'); 
                fakeRequestPromise('yelp.com/api/coffee/page3')
                    .then(() => {
                        console.log('it worked (page 3)!'); 
                    })
                    .catch(() => {
                        console.log('Error (page 3)!');
                    })
            })
            .catch(() => {
                console.log('Error (page 2)!');
            })
    })
    .catch(() => { //catch if it isn't
        console.log('Error (page 1)!');
    })
//a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function
//the above code is still fairly messy as it uses a lot of nested callbacks