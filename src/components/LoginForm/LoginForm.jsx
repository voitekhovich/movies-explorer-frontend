import './LoginForm.css'
import React from "react";
import Logo from "../elements/Logo/Logo";
import { useForm } from "../../hooks/useForm";
import EntryField from '../EntryField/EntryField';
import { Link } from 'react-router-dom';
// import Loader from "./Loader";

export default function LoginForm(props) {
 
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const {values, handleChange } = useForm({});

  const sendErrorMessage = (mesg) => {
    setError(mesg);
    console.log(mesg);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    props
      .onSubmit(values['email'], values['password'])
      .catch((err) => {
        sendErrorMessage(err);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <React.Fragment>
      <h2 className='login-form__title'>{props.title}</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        
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