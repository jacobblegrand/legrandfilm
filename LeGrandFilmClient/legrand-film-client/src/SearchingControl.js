import React from 'react';
import SearchGrid from './SearchGrid';
import FilmGrid from './FilmGrid';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SearchingControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.state = {isSearching: false};
  }

  handleSearchClick() {
    this.setState({isSearching: true});
  }

  handleBackClick() {
    this.setState({isSearching: false});
  }

  render() {
    var isSearching = this.state.isSearching;
    let grid = <FilmGrid></FilmGrid>;
    let button = <button onClick={this.handleSearchClick}>Add film</button>
    if (isSearching) {
      grid = <SearchGrid></SearchGrid>;
      button = 
      
        <button onClick={this.handleBackClick}>Back to films</button>
    }

    return (
      <div>
        {button}
        {grid}
      </div>
    );
  }
}

export default SearchingControl;