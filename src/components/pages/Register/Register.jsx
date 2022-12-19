import React from 'react';
import LoginForm from '../../LoginForm/LoginForm';
import EntryField from '../../EntryField/EntryField';

function Register() {

  return (
    <LoginForm
      title="Добро пожаловать!"
      submitTitle="Зарегистрироваться"
      subtitleText="Уже зарегистрированы?"
      subtitleLinkText="Войти"
      subtitleLink="/signin"
    >
      <EntryField 
        id="name"
        name="name"
        type="text"
        placeholder="Имя"
      />
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

export default Register;