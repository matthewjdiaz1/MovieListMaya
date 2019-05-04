import React from 'React';
import Movie from './Movie.jsx';

var MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Movie className="movie-title" key={props.movies.indexOf(movie)} movie={movie.title} />
      ))}
    </div>
  )
}

export default MovieList;