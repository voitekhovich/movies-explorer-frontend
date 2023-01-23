import "./Profile.css";

import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { mainApi } from "../../../utils/MainApi";
import { useFormAndValidation } from "../../../hooks/useFormAndValidation";
import Preloader from "../../Preloader/Preloader";
import { namePattern } from "../../../utils/constants";

function Profile(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { values, setValues, isValid, errors, handleChange } =
    useFormAndValidation();
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    setError('');
    return mainApi
      .setUserInfo(values["name"], values["email"])
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        switch (err) {
          case 400:
            setError(`${err} - некорректно заполнено одно из полей`);
            return Promise.reject(
              `${err} - некорректно заполнено одно из полей`
            );
          case 409:
            setError(`${err} - такой email уже существует`);
            return Promise.reject(`${err} - такой email уже существует`);
          default:
            return Promise.reject(err);
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
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit} error={error}>
          <label className="profile__label">
            Имя
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
            E-mail
            <input
              className="profile__input"
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              value={values["email"] || ""}
              errors={errors}
              onChange={handleChange}
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
            Редактировать
          </button>
        </form>
        <button
          className="profile__button profile__exit link-hover"
          onClick={props.onSignOut}
        >
          Выйти из аккаунта
        </button>
      </div>
    </main>
  );
}

export default Profile;
