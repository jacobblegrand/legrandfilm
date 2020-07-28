import React, { Component } from 'react';
import FilmCard from './FilmCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SearchGrid extends Component {
    constructor(props) {
      super(props)
      this.update = this.update.bind(this);
      this.state = {
        movies: [],
        count: 0
      }
    }

    search = () => {
      var url = 'http://localhost:5000/FilmInfo/GetFilms/';
      fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.setState({ movies: data})
      })
      .catch(console.log)
    }

    componentDidMount() {
      this.search();
    }

    update() {
      this.search();
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
          <Container>
            {groupedArray.map(chunk =>
                <Row id ="row">
                  {chunk.map(item =>
                    <Col xs={2}><FilmCard action = {this.update} isSearch={false} movie={item}/></Col>
                    )}
                </Row>
            )}
          </Container>
        </div>
      )
    }
}

export default SearchGrid;
