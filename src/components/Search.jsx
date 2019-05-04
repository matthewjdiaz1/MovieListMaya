import React from 'React';

class Search extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // methods
  handleChange(event) {
    this.setState({ value: event.target.value });
    // console.log(this.state.value);
    // console.log(this.props.movies);

  }
  handleSubmit(event) {
    // possible callback here
    this.props.handleSearch(this.state.value);
    event.preventDefault();
  }
  // lifecycle
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        {/* onChange={this.handleChange} down */}
        <input className="search" type='text' value={this.state.value} onChange={this.handleChange} />
        <input className="search" type='submit' value='Submit' />
      </form>
    )
  }
}

export default Search;

// create a from in react
//// forms in react are generally class components by default
