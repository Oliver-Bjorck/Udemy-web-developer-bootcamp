async function hello() { //the async keyword automatically returns a promise, even if one isn't declared

}

const sing = async () => { //this also works with arrow functions
    throw 'Uh oh!' //in order to reject a promise, we must throw our own error
    return 'LALALALA' //if you return a value, the promise will be resolved with that value
}

sing()
    .then((data) => {
        console.log('promise resolved with', data)
    })
    .catch(err => {
        console.log('Oh no, promise rejected')
        console.log(err)
    })

const login = async (username,password) => { //in this scenario there are three outcomes
    if(!username || !password) throw 'Missing Credentials!' //this will reject the promise
    if(password === 'corgifeetarecute') return 'Welcome!' //this will resolve the promise
    throw 'Invalid Password' //this will also reject the promise
}

login('aasfdhuiafh', 'corgifeetarecute')
    .then(msg => {
        console.log('Logged In!')
        console.log(msg)
    })
    .catch(err => {
        console.log('Error:')
        console.log(err)
    })