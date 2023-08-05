const fakeRequestCallback = (url, success, failure) => { //this fakeRequest requires you to enter two callbacks
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(') //one for failure
        } else {
            success(`Here is your fake data from ${url}`) //one for success
        }
    }, delay)
}

fakeRequestCallback('books.com/page1', 
    function (response) { //often responses are passed through these callbacks
        console.log('it worked!')
        console.log(response)
        fakeRequestCallback('books.com/page2',
            function (response) {
                console.log('it worked!')
                console.log(response)
                fakeRequestCallback('books.com/page3', //as you can see, using callbacks can lead to some ugly and hard to maintain code
                    function (response) {
                        console.log('it worked!')
                        console.log(response)
                    }, function (err) {
                        console.log('error (3rd request)!', err)
                    })
            }, function (err) {
                console.log('error (2nd request)!', err)
            })
        }, function (err) {
            console.log('error!', err)
    })

//promises can make this a lot nicer