import "./SearchForm.css";

import React, { useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { LINK_MOVIES_TITLE } from "../../utils/constants";

function SearchForm(props) {
  const { filter, setFilter, submitClick } = props;
  const { values, setValues, handleChange } = useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitClick(values["search"]);
  };

  useEffect(() => {
    setValues({ search: filter.query });
  }, [filter.query]);

  return (
    <div className="search-form">
      <form
        className="search-form__input-box"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="search-form__icon"></div>
        <input
          className="search-form__input"
          id="search"
          name="search"
          type="text"
          placeholder={LINK_MOVIES_TITLE}
          value={values["search"] || ""}
          onChange={handleChange}
          required
        />
        <button
          className="search-form__button button-hover"
          type="submit"
        ></button>
      </form>
      <FilterCheckbox
        className="search-form__check-box"
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}

export default SearchForm;
