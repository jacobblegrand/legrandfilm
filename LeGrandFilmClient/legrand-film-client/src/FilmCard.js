import React, { Component } from 'react';
import './Style.scss';

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
    .then(() => {
      this.props.action();
    })
    .catch(console.log)
  }

  render() {
    let imgSrc = "https://image.tmdb.org/t/p/w200" + this.props.movie.poster_path
    let button;
    if (this.props.movie.poster_path === null)
      imgSrc = 'http://gearr.scannain.com/wp-content/uploads/2015/02/noposter.jpg'
    if (this.props.isSearch) 
      button = <button onClick={this.addFilm}>Add</button>
    else
      button = <button onClick={this.deleteFilm}>Delete</button>

    return (
      <div class="card bg-dark text-white">
        <img class="card-img" src={imgSrc}></img>
        <div class="card-img-overlay">
          {button}
        </div>
      </div>
    )
  }
}

export default FilmCard;
