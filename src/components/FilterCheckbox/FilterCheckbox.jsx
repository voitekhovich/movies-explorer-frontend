import './FilterCheckbox.css';

import React from 'react';

function FilterCheckbox() {
  
  const [check, setCheck] = React.useState(true);

  const isChecked = () => {
    setCheck(!check);
  }

  return (
    <div className='filter-checkbox'>
      <button className={check? 'checkbox checkbox_checked' : 'checkbox'}
        role='switch' aria-checked='false' onClick={isChecked}>
      </button>
      <p className='filter-checkbox__title'>Короткометражки</p>
    </div>
    
  );
}

export default FilterCheckbox;