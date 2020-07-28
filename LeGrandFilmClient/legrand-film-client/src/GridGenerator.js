import React, { Component } from 'react';
const { default: FilmCard } = require("./FilmCard");


const GridLayout = (props) => (
  <div id="mainContent" className="container" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px', gridAutoRows: 'minMax(100px, auto)'}}>
    {this.props.movies.map((movie) => (
      <div>
        <FilmCard movie={movie}/>
      </div>
    ))}
  </div>
)

export default GridLayout;