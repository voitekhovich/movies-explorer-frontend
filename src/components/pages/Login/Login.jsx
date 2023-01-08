import React from 'react';
import LoginForm from '../../LoginForm/LoginForm';
import EntryField from '../../EntryField/EntryField';
import { useForm } from '../../../hooks/useForm';

function Login(props) {

  const {values, handleChange } = useForm({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(values['email'], values['password']);
    return props.onLogin(values['email'], values['password'])
      .catch((err) => {
        switch (err) {
          case 400:
            return Promise.reject(`${err} - не передано одно из полей`);
          case 401:
            return Promise.reject(`${err} - пользователь с email не найден`);
          default:
            return Promise.reject(err);
        }
      })
  };

  return (
    <LoginForm
      title="Рады видеть!"
      submitTitle="Войти"
      subtitleText="Ещё не зарегистрированы?"
      subtitleLinkText="Регистрация"
      subtitleLink="/signup"
      onSubmit={handleSubmit}
    >
      <EntryField 
        id="email"
        name="email"
        type="email"
        placeholder="E-mail"
        value={values['email'] || ""}
        onChange={handleChange}
      />
      <EntryField 
        id="password"
        name="password"
        type="password"
        placeholder="Пароль"
        value={values['password'] || ""}
        onChange={handleChange}
      />
    </LoginForm>
  );
}

export default Login;