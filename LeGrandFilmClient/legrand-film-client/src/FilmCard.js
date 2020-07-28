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
    .then(() => {
      this.props.action();
    })
    .catch(console.log)
  }

  render() {
    let imgSrc = "https://image.tmdb.org/t/p/w200" + this.props.movie.poster_path
    let button;
    if (this.props.movie.poster_path === null)
      imgSrc = 'https://lh3.googleusercontent.com/proxy/LUJ8UTmha-3dJe8IrvZFjrtJzdm75-75PkFuY6_EJ3cGa9JP9WddbSvv4QPPdeaXdyLEp_P9KM518pDd7RAkInhfNAheUASNEItBxmfq4cbkUyV8-814I5M'
    if (this.props.isSearch) 
      button = <button onClick={this.addFilm}>Add</button>
    else
      button = <button onClick={this.deleteFilm}>Delete</button>

    return (
      <div className="card-body">
        <img src={imgSrc}></img>
        {button}
      </div>
    )
  }
}

export default FilmCard;
