import './LoginForm.css'
import React from "react";
import Logo from "../elements/Logo/Logo";
import { Link } from 'react-router-dom';

export default function LoginForm(props) {
  return (
    <React.Fragment>
      <Logo />
      <h2 className='login-form__title'>{props.title}</h2>
      <form className="login-form">
        
          { props.children }
          <span className='login-form__error'>Что-то пошло не так...</span>

          <button className="login-form__button" type="submit">
            {props.submitTitle}
          </button>
          <p className="register__subtitle">
            { props.subtitleText }{" "}
            <span>
              <Link className='register__subtitle-span' to={ props.subtitleLink }>{ props.subtitleLinkText }</Link>
            </span>
          </p>

      </form>
    </React.Fragment>
  );
}