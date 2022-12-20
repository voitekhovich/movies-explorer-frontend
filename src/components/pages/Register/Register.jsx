import './Register.css';

import React from 'react';
import LoginForm from '../../LoginForm/LoginForm';
import Logo from '../../elements/Logo/Logo';
import EntryField from '../../EntryField/EntryField';

function Register(props) {
  const { onRegister } = props;

  const handleSubmit = (email, password) => {
    return onRegister(email, password).catch((err) => {
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
    <div className='register'>
      <Logo className='register__logo'/>
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
          // value={values['name'] || ""}
          // onChange={handleChange}
        />

        <EntryField 
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          // value={values['email'] || ""}
          // onChange={handleChange}
        />

        <EntryField 
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          // value={values['password'] || ""}
          // onChange={handleChange}
        />
        
      </LoginForm>
      
    </div>
  );
}
export default Register;