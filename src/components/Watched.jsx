import React from 'React';

class Watched extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.props.movie.watched = !this.props.movie.watched;
    this.props.addMovieToWatchedMovies(this.props.movie);
    /*
      -Never MUTATE-
      You’ve probably been hearing not to mutate objects and 
      arrays in props and state. If you were to mutate objects 
      in a parent component, your “pure” child components wouldn’t 
      update. Although the values have changed upstream, the child 
      would be comparing the reference to the previous props and 
      not detect a difference.

      Instead, return new objects when you make a change by 
      either leveraging es6 for object and array spreading or 
      using a library to enforce immutability.
    */

    // TODO - revisit
    // create a watchedMovies array in app
    // when Watched is clicked, add movie name to watchedMovies
    // when toggle seentIt/toWatch button is clicked pass
    //array up to app and compare it with allMovies
    // can use same array, with include or (exclued?) and render based
    // on matched found/not matching
    // if works, remove watched toggle from everywhere
    // ???
    // profit

    // new todo
  };
  render() {
    return (
      <div>
        <button className="Watched" onClick={this.handleClick}>Watched</button>
      </div>
    )
  }
}

export default Watched;