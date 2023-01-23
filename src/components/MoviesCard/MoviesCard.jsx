import "./MoviesCard.css";

import React from "react";
import Like from "../elements/Like/Like";

function MoviesCard(props) {
  const { card, likeStyle } = props;

  const moment = (time) => {
    return `${Math.floor(time / 60)}ч ${time % 60}м`;
  };

  return (
    <li className="movies-card">
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img
          src={card.image}
          alt={card.nameRU}
          className="movies-card__image"
        />
      </a>
      <div className="movies-card__info-box">
        <div
          className={`movies-card__title-box ${
            likeStyle && "movies-card_hover"
          }`}
        >
          <h2 className="movies-card__title text-nowrap">{card.nameRU}</h2>
          <Like
            handleLikeClick={props.handleLikeClick}
            card={card}
            likeStyle={likeStyle}
          />
        </div>
        <p className="movies-card__duration">{moment(card.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
