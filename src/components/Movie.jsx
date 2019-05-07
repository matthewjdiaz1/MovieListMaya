import React from 'React';
import Watched from './Watched.jsx';

var Movie = (props) => {
  return (
    <div>
      {props.movie.title}<Watched addMovieToWatchedMovies={props.addMovieToWatchedMovies} movie={props.movie} />
    </div>
  )
}

export default Movie;