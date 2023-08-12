fetch("https://swapi.dev/api/people/1/") //the fetch function returns a promise
    .then((res) => { //this will pass through the response the request
        console.log('resolved!', res); //this won't print the data received though
        return res.json(); //in order to see the data received we need to use.json()
    })
    .then((data) => {
        console.log("JSON done!", data); //we can then use another then to print the data
        return fetch("https://swapi.dev/api/people/2/") //we can then make a second request if we wanted to
    }) 
    .then((res) => { //these requests occur in series, the first request has to be resolved before it attempts the second
        console.log('second request resolved', res);
        return res.json(); //it may be better to make the requests independent of one another
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => { //this will pass through the error if something went wrong
        console.log('error!', e);
    })

const loadStarWarsPeople = async () => { //this can also be done using an async function, to make it cleaner
    try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) {
        console.log('Error', e)
    }
}

loadStarWarsPeople();