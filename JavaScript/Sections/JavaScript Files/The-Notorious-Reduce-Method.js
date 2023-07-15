const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

const total = prices.reduce((total, price) => total + price) //the reduce method can be used to reduce an array down to a single value using math

const minimumPrice = prices.reduce((min, price) => { //or it can be used for comparison to find a specific value based on constraints
    if (price < min) {
        return price;
    }
    return min;
})

const evens = [2, 4, 6, 8];

const addedEvens = evens.reduce((cum, num) => sum + num, 100) //you can also set a starting point for the accumulator value (e.g. here it would return 120)

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if(currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})


