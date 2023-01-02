import './FilterCheckbox.css';

import React from 'react';
import cn from 'classnames';

function FilterCheckbox(props, {className}) {
  
  // const { filterCheck, isFilterCheck } = props
  const { filter, setFilter } = props

  const isChecked = () => {
    // filterCheck();
    setFilter({...filter, shortFilms: !filter.shortFilms});
  }

  return (
    <div className={cn('filter-checkbox', className)}>
      <button className={filter.shortFilms? 'checkbox checkbox_checked' : 'checkbox'}
        type='button' role='switch' aria-checked='false' onClick={isChecked}>
      </button>
      <p className='filter-checkbox__title'>Короткометражки</p>
    </div>
    
  );
}

export default FilterCheckbox;