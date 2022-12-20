import './Login.css';

import React from 'react';
import LoginForm from '../../LoginForm/LoginForm';
import Logo from '../../elements/Logo/Logo';
import EntryField from '../../EntryField/EntryField';

function Login(props) {
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
export default Login;