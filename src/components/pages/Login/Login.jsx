import React, { useState } from 'react';
import LoginForm from '../../LoginForm/LoginForm';
import EntryField from '../../EntryField/EntryField';
import { useFormAndValidation } from '../../../hooks/useFormAndValidation';

function Login(props) {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState('');
  const { values, isValid, errors, handleChange } =
    useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    return props.onLogin(values['email'], values['password'])
      .catch((err) => {
        switch (err) {
          case 400:
            setError(`${err} - некорректно заполнено одно из полей`);
            return Promise.reject(`${err} - некорректно заполнено одно из полей`);
          case 401:
            setError(`${err} - неправильный email или пароль`);
            return Promise.reject(`${err} - неправильный email или пароль`);
          default:
            return Promise.reject(err);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <LoginForm
      title="Рады видеть!"
      submitTitle="Войти"
      subtitleText="Ещё не зарегистрированы?"
      subtitleLinkText="Регистрация"
      subtitleLink="/signup"
      onSubmit={handleSubmit}
      isValid={isValid}
      error={error}
      isLoading={isLoading}
    >
      <EntryField 
        id="email"
        name="email"
        type="email"
        placeholder="E-mail"
        value={values['email'] || ""}
        errors={errors}
        onChange={handleChange}
      />
      <EntryField 
        id="password"
        name="password"
        type="password"
        placeholder="Пароль"
        value={values['password'] || ""}
        errors={errors}
        onChange={handleChange}
      />
    </LoginForm>
  );
}

export default Login;