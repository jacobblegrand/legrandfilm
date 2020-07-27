import React, { Component } from 'react';
import SearchBar from './SearchBar'
import FilmCard from './FilmCard'

class FilmGrid extends Component {
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
          <center><h1>Movies</h1></center>
          {this.state.movies.map((movie) => (
            <FilmCard movie={movie}/>
          ))}
        </div>
      )
    }
}

export default FilmGrid;
