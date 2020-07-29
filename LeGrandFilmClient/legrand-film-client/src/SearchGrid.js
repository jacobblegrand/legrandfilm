import React, { Component } from 'react';
import SearchBar from './SearchBar';
import FilmCard from './FilmCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SearchGrid extends Component {
    state = {
      movies: []
    }

    search = (query) => {
      if (query !== ''){
        var url = 'https://legrandfilmapi.azurewebsites.net/FilmInfo/GetInfo/' + query;
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

    chunkArray(arr, size) {
      var groupedArray = [];
      for (var i = 0; i < arr.length; i += size) {
        groupedArray.push(arr.slice(i, i + size));
      }
      return groupedArray;
    }

    render() {
      var groupedArray = this.chunkArray(this.state.movies, 6);

      return (
        <div>
          <SearchBar className = 'search-bar' searchBarCallback={this.search}/>
          <div>
          <Container>
            {groupedArray.map(chunk =>
                <Row>
                  {chunk.map(item =>
                    <Col xs={2}><FilmCard action = {this.update} isSearch={true} movie={item}/></Col>
                    )}
                </Row>
            )}
          </Container>
        </div>
        </div>
      )
    }
}

export default SearchGrid;
