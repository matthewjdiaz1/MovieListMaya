import React from 'React';

class ToggleWatched extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watchedToggle: false,
      watchedMovies: [],
    };
    this.clickWatched = this.clickWatched.bind(this);
    this.clickToWatch = this.clickToWatch.bind(this);
  }
  clickWatched(event) {
    this.props.handleToggleWatched();
  }
  clickToWatch(event) {
    this.props.handleToggleToWatch();
  }
  render() {
    return (
      <div className="btnSpace">
        <button className="watchBtn" onClick={this.clickWatched}>Seent It</button>
        <button className="watchBtn" onClick={this.clickToWatch}>The Unseent</button>
      </div>
    );
  }
}

export default ToggleWatched;