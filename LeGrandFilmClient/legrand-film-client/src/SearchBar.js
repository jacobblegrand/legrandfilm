import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.searchBarCallback(event.target.value);
  }

  render() {
    return (
      <div>
        <label>
          Search for a film:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}

export default SearchBar;