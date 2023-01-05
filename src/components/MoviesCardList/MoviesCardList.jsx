import './MoviesCardList.css';
import React, { useEffect, useRef, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

  const gridRef = useRef();

  // const gridCount = (gridColumns) => {
  //   props.getGridColumns(gridColumns);
  // }

  const getGridColumn = () => {
    const gridComputedStyle = window.getComputedStyle(gridRef.current);
    const gridColumnCount = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;
    // setGridColumns(gridColumnCount);
    console.log(gridColumnCount);
  }

  useEffect(() => {
    // gridRef.current.addEventListener('load', getGridColumn);
    window.addEventListener('resize', () => setTimeout(getGridColumn, 500));
    // getGridColumn();
    return () => {
      window.removeEventListener('resize', () => setTimeout(getGridColumn, 500));
      // gridRef.current.removeEventListener('load', getGridColumn);
    }
  }, [])

  if (!props.data.length)
  return <p className='movies__info-message'>{ props.infoMessage }</p>

  return (
    <ul ref={gridRef} className="movies-cards">
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