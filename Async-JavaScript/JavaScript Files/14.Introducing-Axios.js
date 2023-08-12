axios.get("https://swapi.dev/api/people/1/") //axios is helpful as it already retrieves and parses the data for us
.then((res) => {
    console.log("Response:", res);
})
.catch ((e) => {
    console.log("Error:", e)
})

//axios just makes it a little easier an quicker to make requests

const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
        console.log("Response:", res.data);
    } catch(e) {
        console.log("Error:", e);
    }
}

getStarWarsPerson(5);