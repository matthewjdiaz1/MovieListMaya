// import react component
import React from 'React';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import ToggleWatched from './ToggleWatched.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: [],
      displayList: [],
      query: '',
      watchedMovies: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.filterList = this.filterList.bind(this);
    this.handleToggleWatched = this.handleToggleWatched.bind(this);
    this.handleToggleToWatch = this.handleToggleToWatch.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.addToList = this.addToList.bind(this);
    this.addMovieToWatchedMovies = this.addMovieToWatchedMovies.bind(this);

  }
  handleSearch(query) {
    this.setState({
      query: query
    }, this.filterList)
  }
  filterList() {
    let newList = [];
    this.state.allMovies.forEach(movie => {
      if (movie.title.toLowerCase().includes(this.state.query.toLowerCase())) {
        newList.push(movie);
      }
      if (newList.length > 0) {
        this.setState({
          displayList: newList,
        });
      } else {
        this.setState({
          displayList: [{ title: 'No movie found!' }]
        })
      }
      // console.log('found movies:', this.props.displayList);
    });
  }
  handleToggleWatched() {
    let newList = [];
    console.log(this.state.watchedMovies);
    this.state.allMovies.forEach(movie => {
      if (this.state.watchedMovies.includes(movie.title)) {
        newList.push(movie);
      }
    });
    console.log(newList);
    this.setState({ displayList: newList });
  }
  handleToggleToWatch() {
    let newList = [];
    console.log(this.state.watchedMovies);
    this.state.allMovies.forEach(movie => {
      if (!this.state.watchedMovies.includes(movie.title)) {
        newList.push(movie);
      }
    });
    console.log(newList);
    this.setState({ displayList: newList });

  }
  handleAdd(query) {
    this.setState({
      query: query,
    }, this.addToList);
  }
  addToList() {
    let newList = this.state.allMovies;
    newList.push({
      title: this.state.query,
      watched: false,
    });
    this.setState({
      allMovies: newList,
    });
    let newDisplay = this.state.displayList;
    newDisplay.push({
      title: this.state.query,
      watched: false,
    });
    this.setState({
      displayList: newDisplay,
    });
    // console.log(this.state.allMovies);
    // console.log('newList:', newList);
    // console.log('displayList:', this.state.displayList);
    // console.log('allMovies:', this.state.allMovies);
  }
  addMovieToWatchedMovies(newMovie) {
    console.log(newMovie.title);
    var newWatchedMovies = this.state.watchedMovies.slice();
    newWatchedMovies.push(newMovie.title);
    this.setState({ watchedMovies: newWatchedMovies }, console.log('state', this.state.watchedMovies));
  }
  render() {
    return (
      <div>
        <AddMovie handleAdd={this.handleAdd} />
        <Search handleSearch={this.handleSearch} />
        <ToggleWatched handleToggleWatched={this.handleToggleWatched} handleToggleToWatch={this.handleToggleToWatch} allMovies={this.state.allMovies} />
        <h1 className="movie-title">Movie List</h1>
        <MovieList addMovieToWatchedMovies={this.addMovieToWatchedMovies} movies={this.state.displayList} />
      </div>
    );
  }
}

export default App;