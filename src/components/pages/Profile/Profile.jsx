import "./Profile.css";

import React, { useContext, useState } from "react";
import validator from "validator";
import { AuthContext } from "../../../contexts/AuthContext";
import { mainApi } from "../../../utils/MainApi";
import { useFormAndValidation } from "../../../hooks/useFormAndValidation";
import Preloader from "../../Preloader/Preloader";
import {
  FORM_EMAIL_INPUT_ERROR_HANDLER,
  FORM_EMAIL_INPUT_PLACEHOLDER,
  FORM_NAME_INPUT_PLACEHOLDER,
  LINK_SIGNOUT_TITLE,
  MESSAGE_CONFLICT_EMAIL,
  MESSAGE_INCORRECT_USER_DATA,
  namePattern,
  PROFILE_SUBMIT_TITLE,
  PROFILE_WELCOM_TITLE,
} from "../../../utils/constants";

function Profile(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const {
    values,
    setValues,
    isValid,
    setIsValid,
    errors,
    setErrors,
    handleChange,
  } = useFormAndValidation();

  const handleEmailChange = (evt) => {
    handleChange(evt);
    if (validator.isEmail(evt.target.value)) setIsValid(true);
    else {
      setIsValid(false);
      setErrors({ ...errors, email: FORM_EMAIL_INPUT_ERROR_HANDLER });
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    setError("");
    return mainApi
      .setUserInfo(values["name"], values["email"])
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        switch (err) {
          case 400:
            setError(MESSAGE_INCORRECT_USER_DATA);
            break;
          case 409:
            setError(MESSAGE_CONFLICT_EMAIL);
            break;
          default:
            setError(err);
        }
      })
      .finally(() => setIsLoading(false));
  };

  React.useEffect(() => {
    setValues((values) => {
      return {
        ...values,
        name: currentUser.name,
        email: currentUser.email,
      };
    });
  }, []);

  return (
    <main className="profile">
      <div className="profile__box">
        <h2 className="profile__title">
          {PROFILE_WELCOM_TITLE}, {currentUser.name}!
        </h2>
        <form className="profile__form" onSubmit={handleSubmit} error={error}>
          <label className="profile__label">
            {FORM_NAME_INPUT_PLACEHOLDER}
            <input
              className="profile__input"
              id="name"
              name="name"
              type="text"
              value={values["name"] || ""}
              errors={errors}
              onChange={handleChange}
              pattern={namePattern.pattern}
              title={namePattern.title}
              required
            />
          </label>
          {errors["name"] ? (
            <span className="entry-field__input-error">{errors["name"]}</span>
          ) : (
            ""
          )}
          <label className="profile__label">
            {FORM_EMAIL_INPUT_PLACEHOLDER}
            <input
              className="profile__input"
              id="email"
              name="email"
              type="email"
              placeholder={FORM_EMAIL_INPUT_PLACEHOLDER}
              value={values["email"] || ""}
              errors={errors}
              onChange={handleEmailChange}
              required
            />
          </label>
          {errors["email"] ? (
            <span className="entry-field__input-error">{errors["email"]}</span>
          ) : (
            ""
          )}

          {isLoading && <Preloader />}

          <span className="login-form__error">{error}</span>

          <button
            className="profile__button profile__submit link-hover"
            disabled={!isValid || isLoading}
          >
            {PROFILE_SUBMIT_TITLE}
          </button>
        </form>
        <button
          className="profile__button profile__exit link-hover"
          onClick={props.onSignOut}
        >
          {LINK_SIGNOUT_TITLE}
        </button>
      </div>
    </main>
  );
}

export default Profile;
