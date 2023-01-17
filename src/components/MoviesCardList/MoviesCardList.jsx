import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

  if (!props.data.length)
  return <p className='movies__info-message'>{ props.infoMessage }</p>

  return (
    <ul className="movies-cards">
      {props.data.map((card) => (
        <MoviesCard
          key={card.id ? card.id : card._id}
          card={card}
          onCardLike={props.onCardLike}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;