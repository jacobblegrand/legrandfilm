import React, { Component, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './Style.scss';
import FormControl from 'react-bootstrap/FormControl'

class FilmCard extends Component {
  constructor(props) {
    super(props)
    this.addFilm = this.addFilm.bind(this)
    this.deleteFilm = this.deleteFilm.bind(this)
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {isHovering: false}
  }
  
  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  addFilm() {
    var url = 'https://legrandfilmapi.azurewebsites.net/FilmInfo/InsertFilm';
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
    var url = 'https://legrandfilmapi.azurewebsites.net/FilmInfo/DeleteFilm';
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
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
      <a
        href=""
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {children}
          <svg className = "custom-toggle" width="1em" height="1em" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
          </svg>
      </a>
    ));
  
    let imgSrc = "https://image.tmdb.org/t/p/w200" + this.props.movie.poster_path
    let button, dropdown;
    if (this.props.movie.poster_path === null)
      imgSrc = 'http://gearr.scannain.com/wp-content/uploads/2015/02/noposter.jpg'
    if (this.props.isSearch) 
      // button = <Dropdown.Item onClick={this.addFilm} eventKey="1">Add</Dropdown.Item>
      button = <button type="button" onClick={this.addFilm} className="add-delete btn btn-success">Add</button>
    else
      // button = <Dropdown.Item onClick={this.deleteFilm} eventKey="1">Delete</Dropdown.Item>
      button = <button type="button" onClick={this.deleteFilm} className="add-delete btn btn-danger">Delete</button>
    if (this.state.isHovering) {
      dropdown = button;
        // <Dropdown>
        //   <Dropdown.Toggle as={CustomToggle}>
        //   </Dropdown.Toggle>
        //   <Dropdown.Menu>
        //     {button}
        //   </Dropdown.Menu>
        // </Dropdown>
    }



    return (
      <div class="card bg-dark text-white" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
        <img class="card-img" src={imgSrc}></img>
        <div class="card-img-overlay">
          {dropdown}
        </div>
      </div>
    )
  }
}

export default FilmCard;
