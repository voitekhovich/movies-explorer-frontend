import './FilterCheckbox.css';

import React from 'react';
import cn from 'classnames';

function FilterCheckbox(props, {className}) {
  const { filterCheck, isFilterCheck } = props

  // const [check, setCheck] = React.useState(false);

  const isChecked = () => {
    // setCheck(!check);
    filterCheck();
  }

  return (
    <div className={cn('filter-checkbox', className)}>
      <button className={isFilterCheck? 'checkbox checkbox_checked' : 'checkbox'}
        type='button' role='switch' aria-checked='false' onClick={isChecked}>
      </button>
      <p className='filter-checkbox__title'>Короткометражки</p>
    </div>
    
  );
}

export default FilterCheckbox;