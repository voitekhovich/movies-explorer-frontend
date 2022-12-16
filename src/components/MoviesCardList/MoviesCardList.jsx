import './MoviesCardList.css';
import { data } from '../../utils/data.js'
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button'

function MoviesCardList(props) {

  // const {
  //   onEditProfile,
  //   onAddPlace,
  //   onEditAvatar,
  //   onCardClick,
  //   cards,
  //   onCardLike,
  //   onCardDelete,
  // } = props;
  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section aria-label="Блок с карточками">
        <ul className="elements">
          {data.map((card) => (
            <MoviesCard
              key={card.id}
              card={card}
              // onCardClick={onCardClick}
              // onCardLike={onCardLike}
              // onCardDelete={onCardDelete}
            />
          ))}
        </ul>
        <div className='more'>
          <Button title='Ещё' className='more__button' />
        </div>
      </section>
    </main>
  );
}

export default MoviesCardList;