//TASK#1  Create an array of movie objects
const movies = [
    { title: "dead potes society", rating: 8.1, genre: "coming-of-age drama", releaseYear: 1998 },
    { title: "kingsman: the secret service", rating: 7.7, genre: "action", releaseYear: 2014 },
    { title: "into the wild", rating: 8.1, genre: "adventure", releaseYear: 2007 },
    { title: "inception", rating: 8.8, genre: "sci-fi", releaseYear: 2010 },
    { title: "interstellar", rating: 8.7, genre: "sci-fi", releaseYear: 2014 }
];

// Helper function to update HTML
const updateHTML=(id,content)=>{
    document.getElementById(id).innerHTML = content;
};

// Display initial movie list
updateHTML('moviesList', movies.map(movie => `${movie.title} (${movie.releaseYear})`).join('<br>'));

//TASK#2  Add new movies
const AddMovie = (collection1, movie) => {
    collection1.push(movie);
};
AddMovie(movies, { title: "zodiac", rating: 7.7, genre: "thriller", releaseYear: 2007 });
AddMovie(movies, { title: "black swan", rating: 8.0, genre: "horror", releaseYear: 2010 });

updateHTML('newMovies', movies.map(movie => `${movie.title} (${movie.releaseYear})`).join('<br>'));

//TASK#3  Filtering movies by genre
const filterByGenre = (collection2, genre) => {
    return collection2.filter(movie => movie.genre === genre);
};

let genreResults = `
    Sci-Fi: ${filterByGenre(movies, "sci-fi").map(m => m.title).join(', ')}<br>
    Thriller: ${filterByGenre(movies, "thriller").map(m => m.title).join(', ')}<br>
    Coming-of-Age Drama: ${filterByGenre(movies, "coming-of-age drama").map(m => m.title).join(', ')}
`;
updateHTML('moviesByGenre', genreResults);

//TASK#4  Find the highest rating
const highestRating = collection3 => {
    return collection3.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};
updateHTML('highestRatedMovie', `${highestRating(movies).title} (${highestRating(movies).rating})`);

//TASK#5  Create a list of all movie titles
const listOfMovie = (collection4) => {
    return collection4.map(movie => movie.title);
};
updateHTML('movieTitles', listOfMovie(movies).join('<br>'));

//TASK#6  Find movies released after a specific year
const specificYoMovie = (collection5, year) => {
    return collection5.filter(movie => movie.releaseYear === year);
};

let yearResults = `
    2010: ${specificYoMovie(movies, 2010).map(m => m.title).join(', ')}<br>
    2007: ${specificYoMovie(movies, 2007).map(m => m.title).join(', ')}<br>
    2014: ${specificYoMovie(movies, 2014).map(m => m.title).join(', ')}
`;
updateHTML('moviesByYear', yearResults);

//TASK#7  Log results using template literals
let templateResults = movies.map(movie =>
    `${movie.title} (${movie.releaseYear}) is a ${movie.genre} movie with a rating of ${movie.rating}.`
).join('<br>');
updateHTML('templateLog', templateResults);
