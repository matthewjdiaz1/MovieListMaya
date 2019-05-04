// import react component
import React from 'React';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  // constructor
  //// this is where the state if this componenet goes 
  //// as well aswhere we inherit props
  //// it's also best practice to put function binding here
  constructor(props) {
    super(props); // inherit props and react components methods
    this.state = {
      // functon binding goes here, (none yet)
      displayList: this.props.movies,
      query: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  // lifecycle methods(s)
  //// this is where we put code we want to execute at a 
  //// state in a componenet's lifecycle
  // methods
  //// this is where we put functions to manipulate current 
  //// class state
  handleSearch(query) {
    this.setState({
      query: query
    }, this.filterList)
    console.log('query:', this.state.query);
  }

  filterList() {
    console.log('displayList:', this.state.displayList);
    this.state.displayList.forEach(movie => {
      // console.log('title:', movie.title)
      // console.log('query:', this.state.query)
      // console.log(movie.title.toLowerCase().includes(this.state.query.toLowerCase()));
      if (movie.title.toLowerCase().includes(this.state.query.toLowerCase())) {
        console.log('found movie:', movie);
        // this.state.displayList.push(movie);
      }
    });
  }
  // render
  //// this is what react will insert into the DOM wherever 
  //// we place this component
  //// this is comprised primarily of HTML and react components (which themselves conatin html)
  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <h2 className="movie-title">Movie List</h2>
        <MovieList movies={this.props.movies} />
      </div>
    )
  }
}

{/* <h2> Movie List</h2> */ }
export default App;