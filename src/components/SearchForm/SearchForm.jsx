import './SearchForm.css';

import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className='search-form'>
      <form className='search-form__input-box'>
        <div className='search-form__icon'></div>
        <input className='search-form__input' type="text" placeholder='Фильм'></input>
        <button className='search-form__button button-hover'></button>
      </form>
      <FilterCheckbox className='search-form__check-box'/>
    </div>
  );
}

export default SearchForm;