import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

  return (
    <ul className="movies-cards">
      {props.data.map((card) => (
        <MoviesCard
          key={card.id}
          card={card}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;