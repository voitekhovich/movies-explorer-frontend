import './MoviesCard.css';

import React from 'react';
import Like from '../Like/Like';

function MoviesCard(props) {

  const { card } = props;

  const moment = (time) => {
    return `${Math.floor(time / 60)}ч ${time % 60}м`;
  }

  return (
    <li className="card">
      <img
        src={card.image.url}
        alt={card.nameRU}
        className="card__image"
      />
      <div className="card__info-box">
        <h2 className="card__title text-nowrap">{card.nameRU}</h2>
        <Like />
        <p className='card__duration'>{moment(card.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;