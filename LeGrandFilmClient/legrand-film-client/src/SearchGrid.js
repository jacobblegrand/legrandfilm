import React, { Component } from 'react';
import SearchBar from './SearchBar'
import FilmCard from './FilmCard'

class SearchGrid extends Component {
    state = {
      movies: []
    }

    search = (query) => {
      if (query !== ''){
        var url = 'http://localhost:5000/FilmInfo/GetInfo/' + query;
        fetch(url)
        .then(res => res.json())
        .then((data) => {
          this.setState({ movies: data })
        })
        .catch(console.log)
      } else {
        this.setState({ movies: [] });
      }
    }

    render() {
      return (
        <div>
          <SearchBar searchBarCallback={this.search}/>
          <center><h1>Add Film</h1></center>
          {this.state.movies.map((movie) => (
            <FilmCard isSearch={true} movie={movie}/>
          ))}
        </div>
      )
    }
}

export default SearchGrid;
