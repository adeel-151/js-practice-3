//  Movie Playlist Editor

let movies = ["Inception", "Avatar", "Titanic", "Joker", "Interstellar"];

let selectedMovies = movies.slice(0, 3); 

movies.splice(3, 1); 

movies.splice(2, 0, "The Matrix"); 

console.log("Final Movie List:", movies);