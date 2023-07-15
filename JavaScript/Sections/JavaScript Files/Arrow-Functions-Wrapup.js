const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const newMovies = movies.map(function(movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

const newMovies = movies.map(movie => ( //as you can see, the arrow function is a lot shorter and cleaner
    `${movie.title} - ${movie.score / 10}`
))