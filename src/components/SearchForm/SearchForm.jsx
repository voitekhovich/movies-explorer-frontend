import './SearchForm.css';

import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useForm } from "../../hooks/useForm";

function SearchForm(props) {

  const { submitClick, filter, setFilter } = props;
  const {values, handleChange } = useForm({'search': ""});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (values['search'] === '') return console.log('Нужно ввести ключевое слово');
    setFilter({...filter, searchQuery: values['search']})
    submitClick();
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
        <button
          className='search-form__button button-hover'
          onClick={handleSubmit}>
        </button>
      </form>
      <FilterCheckbox
        className='search-form__check-box'
        filter={ filter }
        setFilter={ setFilter }/>
    </div>
  );
}

export default SearchForm;