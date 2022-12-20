import './EntryField.css';

import React from 'react';

function EntryField(props) {

  return (
    <label className='entry-field'>{props.placeholder}
      <input className='entry-field__input' type="text" defaultValue={props.defaultValue} />
    </label>
  );
}
export default EntryField;