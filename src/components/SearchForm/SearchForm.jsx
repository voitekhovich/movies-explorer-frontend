import "./SearchForm.css";

import React, { useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { NEED_KEY_WORD } from "../../utils/constants";

function SearchForm(props) {
  const { filter, setFilter, submitClick } = props;
  // const [ isError, setIsError ] = useState(false);
  const { values, setValues, handleChange, isValid } = useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // if (isValid) {
      submitClick(values["search"]);
      // setIsError(false);
    // } else setIsError(true);
  };

  useEffect(() => {
    setValues({ search: filter.query })
  }, [filter.query])

  return (
    <div className="search-form">
      <form className="search-form__input-box" onSubmit={handleSubmit} noValidate>
        <div className="search-form__icon"></div>
        <input
          className="search-form__input"
          id="search"
          name="search"
          type="text"
          placeholder="Фильм"
          value={values["search"] || ""}
          onChange={handleChange}
          required
        />
        <button
          className="search-form__button button-hover"
          type="submit"
        ></button>
      </form>
      {/* { isError ? <span className="search-form__input-error">{NEED_KEY_WORD}</span> : ''} */}
      <FilterCheckbox
        className="search-form__check-box"
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}

export default SearchForm;
