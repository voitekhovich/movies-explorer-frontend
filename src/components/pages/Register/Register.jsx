import React, { useState } from 'react';
import LoginForm from '../../LoginForm/LoginForm';
import EntryField from '../../EntryField/EntryField';
import { useFormAndValidation } from '../../../hooks/useFormAndValidation';
import { namePattern } from '../../../utils/constants';

function Register(props) {

  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState('');
  const { values, isValid, errors, handleChange } =
    useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    props.onRegister(values['name'], values['email'], values['password'])
      .catch((err) => {
        let errMessage = "";
        switch (err) {
          case 400:
            setError(`${err} - некорректно заполнено одно из полей`);
            errMessage = `${err} - некорректно заполнено одно из полей`;
            break;
          default:
            errMessage = err;
        }
        return Promise.reject(errMessage);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <LoginForm
      title="Добро пожаловать!"
      submitTitle="Зарегистрироваться"
      subtitleText="Уже зарегистрированы?"
      subtitleLinkText="Войти"
      subtitleLink="/signin"
      onSubmit={handleSubmit}
      isValid={isValid}
      error={error}
      isLoading={isLoading}
    >
      <EntryField 
        id="name"
        name="name"
        type="text"
        placeholder="Имя"
        value={values['name'] || ""}
        errors={errors}
        onChange={handleChange}
        pattern={namePattern.pattern}
        title={namePattern.title}
      />
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

export default Register;