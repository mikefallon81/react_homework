import React, {Component} from 'react';
import Film from './Film.js';
import '../styles/filmList.css';

class FilmList extends Component {

render(){
  const filmNodes = this.props.films.map((film) => {
    return(
      <div className="list"> 
      <li><Film key={film.id} name={film.name} url={film.url}></Film></li></div>

    );
  })

  return(
    <>
    <ul>{filmNodes}</ul>
    </>
  )
}

}

export default FilmList;
