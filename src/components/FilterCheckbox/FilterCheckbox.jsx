import "./FilterCheckbox.css";

import React from "react";
import cn from "classnames";
import { FILTER_CHECKBOX_TITLE } from "../../utils/constants";

function FilterCheckbox(props) {
  const { filter, setFilter, className } = props;

  const isChecked = () => {
    setFilter((filter) => ({
      ...filter,
      checkBox: !filter.checkBox,
    }));
  };

  return (
    <div className={cn("filter-checkbox", className)}>
      <button
        className={filter.checkBox ? "checkbox checkbox_checked" : "checkbox"}
        type="button"
        role="switch"
        aria-checked="false"
        onClick={isChecked}
      ></button>
      <p className="filter-checkbox__title">{FILTER_CHECKBOX_TITLE}</p>
    </div>
  );
}

export default FilterCheckbox;
