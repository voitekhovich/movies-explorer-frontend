import './EntryField.css';

import React from 'react';

function EntryField(props) {

  return (
    <label className='entry-field'>{props.placeholder}
      <input className='entry-field__input'
        id={props.id}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  );
}
export default EntryField;