const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try { //you can handle rejected promises in async functions using try catch
        let data1 = await fakeRequest('/page1');
        let data2 = await fakeRequest('/page2');
        console.log(data1);
        console.log(data2);
    } catch (e) { //e is the error that occured, in this case it will say Connection Timeout
        console.log('Caught an error!')
        console.log('Error is:', e)
    }
}
