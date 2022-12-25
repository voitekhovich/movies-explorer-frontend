import './PageNotFound.css';

import React from 'react';
import { useHistory } from 'react-router-dom';

function PageNotFound(props) {

  const history = useHistory();
  const handleClick = () => history.goBack();

  return (
    <div className='not-found'>
      <div className='not-found__box'>
        <h2 className='not-found__title'>404</h2>
        <p className='not-found__description'>Страница не найдена</p>
        <button className='not-found__back' onClick={ handleClick }>Назад</button>
      </div>
    </div>
  );
}

export default PageNotFound;