import './MoviesCardList.css';
import { data } from '../../utils/data.js'
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button'

function MoviesCardList(props) {

  return (
    <section aria-label="Блок с фильмами">
      <ul className="movies">
        {data.map((card) => (
          <MoviesCard
            key={card.id}
            card={card}
          />
        ))}
      </ul>
      <Button className='movies__more' title='Ещё'/>
    </section>
  );
}

export default MoviesCardList;