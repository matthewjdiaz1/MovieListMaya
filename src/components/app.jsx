// import react component
import React from 'React';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: [],
      displayList: [],
      query: '',
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.filterList = this.filterList.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.addToList = this.addToList.bind(this);
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
          displayList: newList
        });
      } else {
        this.setState({
          displayList: [{ title: 'No movie found!' }],
        })
      }
      // console.log('found movies:', this.props.displayList);
    });
  }
  handleAdd(query) {
    this.setState({
      query: query,
    }, this.addToList);
  }
  addToList() {
    let newList = this.state.allMovies;
    newList.push({ title: this.state.query });
    this.setState({
      allMovies: newList,
    });
    let newDisplay = this.state.displayList;
    newDisplay.push({ title: this.state.query });
    this.setState({
      displayList: newDisplay,
    });
    // console.log('newList:', newList);
    // console.log('displayList:', this.state.displayList);
    // console.log('allMovies:', this.state.allMovies);
  }

  render() {
    return (
      <div>
        <AddMovie handleAdd={this.handleAdd} />
        <Search handleSearch={this.handleSearch} />
        <h2 className="movie-title">Movie List</h2>
        <MovieList movies={this.state.displayList} />
      </div>
    )
  }
}

export default App;