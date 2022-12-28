import './SearchForm.css';

import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useForm } from "../../hooks/useForm";

function SearchForm(props) {

  const { submitClick, filterCheck, isFilterCheck } = props;
  const {values, handleChange } = useForm({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitClick(values['search']);
  }

  return (
    <div className='search-form'>
      <form className='search-form__input-box'>
        <div className='search-form__icon'></div>
        <input 
          className='search-form__input'
          id="search"
          name="search"
          type="text"
          placeholder='Фильм'
          value={values['search'] || ""}
          onChange={handleChange}
        />
        <button className='search-form__button button-hover' onClick={handleSubmit}></button>
      </form>
      <FilterCheckbox className='search-form__check-box' filterCheck={filterCheck} isFilterCheck={ isFilterCheck }/>
    </div>
  );
}

export default SearchForm;