import React from 'react';
import LoginForm from '../../LoginForm/LoginForm';
import EntryField from '../../EntryField/EntryField';

function Login() {

  return (
    <LoginForm
      title="Рады видеть!"
      submitTitle="Войти"
      subtitleText="Ещё не зарегистрированы?"
      subtitleLinkText="Регистрация"
      subtitleLink="/signup"
    >
      <EntryField 
        id="email"
        name="email"
        type="email"
        placeholder="E-mail"
      />
      <EntryField 
        id="password"
        name="password"
        type="password"
        placeholder="Пароль"
      />
    </LoginForm>
  );
}

export default Login;