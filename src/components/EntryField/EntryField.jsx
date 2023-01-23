import "./EntryField.css";

import React from "react";

function EntryField(props) {
  const { name, value, errors } = props;

  return (
    <label className="entry-field">
      {props.placeholder}
      <input className="entry-field__input" {...props} required value={value} />
      {errors[name] ? (
        <span className="entry-field__input-error">{errors[name]}</span>
      ) : (
        ""
      )}
    </label>
  );
}
export default EntryField;
