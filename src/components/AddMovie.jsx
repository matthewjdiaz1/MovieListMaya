import React from 'React';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  handleAdd(event) {
    this.props.handleAdd(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleAdd} >
        <div>
          <input className="add" type='text' value={this.state.value} onChange={this.handleChange} />
          <input className="add" type='submit' value='Add Movie' />
        </div>
      </form>
    )
  }
}

export default AddMovie;