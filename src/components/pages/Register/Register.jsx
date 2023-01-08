import React from 'react';
import LoginForm from '../../LoginForm/LoginForm';
import EntryField from '../../EntryField/EntryField';
import { useForm } from '../../../hooks/useForm';

function Register(props) {

  const {values, handleChange } = useForm({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(values['name'], values['email'], values['password']);
    return props.onRegister(values['name'], values['email'], values['password'])
      .catch((err) => {
        let errMessage = "";
        switch (err) {
          case 400:
            errMessage = `${err} - некорректно заполнено одно из полей`;
            break;
          default:
            errMessage = err;
        }
        return Promise.reject(errMessage);
      });
  };

  return (
    <LoginForm
      title="Добро пожаловать!"
      submitTitle="Зарегистрироваться"
      subtitleText="Уже зарегистрированы?"
      subtitleLinkText="Войти"
      subtitleLink="/signin"
      onSubmit={handleSubmit}
    >
      <EntryField 
        id="name"
        name="name"
        type="text"
        placeholder="Имя"
        value={values['name'] || ""}
        onChange={handleChange}
      />
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

export default Register;