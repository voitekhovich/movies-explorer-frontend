import './MoviesCard.css';

import React from 'react';
import Like from '../elements/Like/Like';
import { BEATFILM_API_URL } from '../../utils/constants';

function MoviesCard(props) {

  const { card } = props;
  
  const moment = (time) => {
    return `${Math.floor(time / 60)}ч ${time % 60}м`;
  }

  const getImageUrl = (imageUrl) => {
    return `${ BEATFILM_API_URL }${imageUrl}`;
  }

  return (
    <li className="movies-card">
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img
          src={ card.image.url ? getImageUrl(card.image.url) : card.image}
          alt={card.nameRU}
          className="movies-card__image"
        />
      </a>
      <div className="movies-card__info-box">
        <div className="movies-card__title-box">
          <h2 className="movies-card__title text-nowrap">{card.nameRU}</h2>
          <Like onCardLike={props.onCardLike} card={card}/>
        </div>
        <p className='movies-card__duration'>{moment(card.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;