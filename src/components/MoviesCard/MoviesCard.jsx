import './MoviesCard.css';

import React from 'react';

function MoviesCard(props) {

  // const { card, onCardClick, onCardLike, onCardDelete } = props;
  const { card } = props;

  // const currentUser = React.useContext(CurrentUserContext);

  // const isOwner = card.owner === currentUser._id;
  // const isLiked = card.likes.some((i) => i === currentUser._id);

  // const handleClick = () => onCardClick(card);
  // const handleClickLike = () => onCardLike(card);
  
  // const cardLikeButtonClassName = `button element__like body__button-hover ${
  //   isLiked ? "element__like_active" : ""
  // }`;

  const cardLikeButtonClassName = 'element__like';

  const moment = (time) => {
    return `${Math.floor(time / 60)}ч ${time % 60}м`;
  }

  return (
    <li className="element">
      <img
        src={card.image.url}
        alt={card.nameRU}
        className="element__image body__button-hover"
        // onClick={handleClick}
      />
      <div className="element__container">
        <h2 className="element__title body__text-nowrap">{card.nameRU}</h2>
        <button
          className={cardLikeButtonClassName}
          type="button"
          aria-label="Нравится"
          // onClick={handleClickLike}
        />
        <p className='element__duration'>{moment(card.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;