import "./FilterCheckbox.css";

import React from "react";
import cn from "classnames";

function FilterCheckbox(props, { className }) {
  const isChecked = () => {
    props.setCheckBox(!props.checkBox);
  };

  return (
    <div className={cn("filter-checkbox", className)}>
      <button
        className={props.checkBox ? "checkbox checkbox_checked" : "checkbox"}
        type="button"
        role="switch"
        aria-checked="false"
        onClick={isChecked}
      ></button>
      <p className="filter-checkbox__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
