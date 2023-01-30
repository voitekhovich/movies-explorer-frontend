import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { DATA_NOT_FOUND } from "../../utils/constants";

function MoviesCardList(props) {

  if (!props.data.length)
  return <p className='movies__info-message'>{ DATA_NOT_FOUND }</p>

  return (
    <ul className="movies-cards">
      {props.data.map((card) => (
        <MoviesCard
          key={card.id ? card.id : card._id}
          card={card}
          handleLikeClick={props.handleLikeClick}
          likeStyle={card.id ? true : false}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;