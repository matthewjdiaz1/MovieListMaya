import React from 'React';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    // possible callback here
    this.props.handleSearch(this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input className="search" type='text' value={this.state.value} onChange={this.handleChange} />
        <input className="search" type='submit' value='Search' />
      </form>
    )
  }
}

export default Search;

// create a from in react
//// forms in react are generally class components by default
