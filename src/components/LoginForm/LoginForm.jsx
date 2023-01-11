import './LoginForm.css'
import React from "react";
import Logo from "../elements/Logo/Logo";
import { Link } from 'react-router-dom';
import Preloader from "../Preloader/Preloader";

export default function LoginForm(props) {
  return (
    <div className='login-form'>
      <div className='login-form__container'>
        <Logo className='login-form__logo'/>
        <h2 className='login-form__heading'>{props.title}</h2>
        <form className="login-form__form" onSubmit={props.onSubmit}>
          
            { props.children }

            { props.isLoading && <Preloader /> }

            <span className='login-form__error'>{props.error}</span>

            <button 
              className="login-form__button button-hover"
              type="submit"
              disabled={!props.isValid || props.isLoading}>
                {props.submitTitle}
            </button>

        </form>
        <p className="login-form__subtitle">
              { props.subtitleText }{" "}
              <span>
                <Link className='login-form__subtitle-span link-hover' to={ props.subtitleLink }>{ props.subtitleLinkText }</Link>
              </span>
            </p>
      </div>
    </div>
  );
}