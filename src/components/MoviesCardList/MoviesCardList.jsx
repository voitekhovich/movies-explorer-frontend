import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

  if (!props.data.length)
  return <p className='movies__info-message'>{ props.infoMessage }</p>

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