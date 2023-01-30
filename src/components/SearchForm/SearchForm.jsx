import "./SearchForm.css";

import React, { useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useForm } from "../../hooks/useForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function SearchForm(props) {
  const { filter, setFilter, submitClick } = props;

  // const { values, setValues, handleChange } = useForm({ search: "" });
  const { values, setValues, errors, handleChange } = useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitClick(values["search"]);
  };

  useEffect(() => {
    setValues({ search: filter.query })
  }, [filter.query])

  return (
    <div className="search-form">
      <form className="search-form__input-box">
        <div className="search-form__icon"></div>
        <input
          className="search-form__input"
          id="search"
          name="search"
          type="text"
          placeholder="Фильм"
          value={values["search"] || ""}
          onChange={handleChange}
          minLength={1}
        />
        <button
          className="search-form__button button-hover"
          onClick={handleSubmit}
        ></button>
      </form>
      {/* { errors['search'] ? <span className="entry-field__input-error">{errors['search']}</span> : ''} */}
      { <span>{errors['search']}</span> }
      <FilterCheckbox
        className="search-form__check-box"
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}

export default SearchForm;
