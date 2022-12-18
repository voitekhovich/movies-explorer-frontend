import './LoginForm.css'
import React from "react";
import Logo from "../elements/Logo/Logo";
import { Link } from 'react-router-dom';

export default function LoginForm(props) {
  return (
    <div className='login-form'>
      <Logo className='login-form__logo'/>
      <h2 className='login-form__heading'>{props.title}</h2>
      <form className="login-form__form">
        
          { props.children }
          <span className='login-form__error'>Что-то пошло не так...</span>

          <button className="login-form__button login__button button-hover" type="submit">
            {props.submitTitle}
          </button>

      </form>
      <p className="register__subtitle">
            { props.subtitleText }{" "}
            <span>
              <Link className='register__subtitle-span link-hover' to={ props.subtitleLink }>{ props.subtitleLinkText }</Link>
            </span>
          </p>
    </div>
  );
}