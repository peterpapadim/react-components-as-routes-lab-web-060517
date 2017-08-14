import React from 'react';
import { movies } from '../data';

const AllMoviesData = () => {
  return (
    movies.map(movie => {
     return <div>
              <h3>Name: {movie.title}</h3>
              <p>Time: {movie.time}</p>
              <p>Genres:</p>
              <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul>
            </div>
    })
  )
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {AllMoviesData()}
    </div>
  );
};

export default Movies;
