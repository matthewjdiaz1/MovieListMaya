import React from 'React';
import Movie from './Movie.jsx';

var MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <div>
          <Movie addMovieToWatchedMovies={props.addMovieToWatchedMovies} className="movie-title" key={props.movies.indexOf(movie)} movie={movie} />
        </div>
      ))}
    </div>
  )
}

export default MovieList;