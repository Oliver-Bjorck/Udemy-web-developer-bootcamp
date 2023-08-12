const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } } //in order to retrieve a json object rather than html, we need to set the headers
        const res = await axios.get('https://icanhazdadjoke.com/', config); //we then pass this through the axios.get function
        return res.data.joke;
    } catch(e) {
        return "No jokes available! Sorry :("
    }
   
}

button.addEventListener('click', addNewJoke);