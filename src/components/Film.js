import React, {Component} from 'react';
import '../styles/film.css';

class Film extends Component {
  render(){
    return (
      <>
      <p className="film"><a href={this.props.url}><h3>{this.props.name}</h3></a></p>
      <hr></hr></>
    )
  }
}

export default Film;
