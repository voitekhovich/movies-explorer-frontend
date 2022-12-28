import './SearchForm.css';

import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {

  const { submitClick, filterCheck, isFilterCheck } = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitClick();
  }

  return (
    <div className='search-form'>
      <form className='search-form__input-box'>
        <div className='search-form__icon'></div>
        <input className='search-form__input' type="text" placeholder='Фильм'></input>
        <button className='search-form__button button-hover' onClick={handleSubmit}></button>
      </form>
      <FilterCheckbox className='search-form__check-box' filterCheck={filterCheck} isFilterCheck={ isFilterCheck }/>
    </div>
  );
}

export default SearchForm;