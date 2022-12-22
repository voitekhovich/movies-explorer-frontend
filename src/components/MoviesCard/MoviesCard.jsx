import './MoviesCard.css';

import React from 'react';
import Like from '../elements/Like/Like';

function MoviesCard(props) {

  const { card } = props;

  const moment = (time) => {
    return `${Math.floor(time / 60)}ч ${time % 60}м`;
  }

  return (
    <li className="movies-card">
      <img
        src={card.image.url}
        alt={card.nameRU}
        className="movies-card__image"
      />
      <div className="movies-card__info-box">
        <div className="movies-card__title-box">
          <h2 className="movies-card__title text-nowrap">{card.nameRU}</h2>
          <Like />
        </div>
        <p className='movies-card__duration'>{moment(card.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;