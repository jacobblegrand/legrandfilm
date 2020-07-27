import React, { Component } from 'react';

class FilmCard extends Component {
  constructor(props) {
    super(props)
    this.addFilm = this.addFilm.bind(this)
    this.deleteFilm = this.deleteFilm.bind(this)
  }

  addFilm() {
    var url = 'http://localhost:5000/FilmInfo/InsertFilm';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.props.movie)
      };

      fetch(url, requestOptions)
      // .then(res => res.json())
      // .then((data) => {
      //   console.log(data)
      // })
  }

  deleteFilm() {
    var url = 'http://localhost:5000/FilmInfo/DeleteFilm';
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.props.movie)
      };

      fetch(url, requestOptions)
      // .then(res => res.json())
      // .then((data) => {
      //   console.log(data)
      // })
      .catch(console.log)
  }

    render() {
      return (
        <div className="card-body">
          <img src={"https://image.tmdb.org/t/p/w200" + this.props.movie.poster_path}></img>
          <h4 className="card-title">{this.props.movie.title}</h4>
          <h5 className="card-subtitle mb-2 text-muted">{this.props.movie.overview}</h5>
          <button onClick={this.addFilm}>Add</button>
          <button onClick={this.deleteFilm}>Delete</button>
        </div>
      )
    }
}

export default FilmCard;
