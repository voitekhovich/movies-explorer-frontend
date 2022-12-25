import './FilterCheckbox.css';

import React from 'react';
import cn from 'classnames';

function FilterCheckbox({className}) {
  
  const [check, setCheck] = React.useState(true);

  const isChecked = () => {
    setCheck(!check);
  }

  return (
    <div className={cn('filter-checkbox', className)}>
      <button className={check? 'checkbox checkbox_checked' : 'checkbox'}
        type='button' role='switch' aria-checked='false' onClick={isChecked}>
      </button>
      <p className='filter-checkbox__title'>Короткометражки</p>
    </div>
    
  );
}

export default FilterCheckbox;