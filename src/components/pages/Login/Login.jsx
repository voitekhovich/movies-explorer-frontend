import React, { useState } from "react";
import LoginForm from "../../LoginForm/LoginForm";
import EntryField from "../../EntryField/EntryField";
import { useFormAndValidation } from "../../../hooks/useFormAndValidation";
import {
  FORM_EMAIL_INPUT_PLACEHOLDER,
  FORM_PASSWD_INPUT_PLACEHOLDER,
  LINK_SIGNIN_TITLE,
  LINK_SIGNUP_TITLE,
  LOGIN_FORM_REGISTER_TITLE,
  LOGIN_FORM_TITLE,
  MESSAGE_INCORRECT_EMAIL_OR_PASS,
  MESSAGE_INCORRECT_USER_DATA,
} from "../../../utils/constants";

function Login(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { values, isValid, errors, handleChange } = useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    return props
      .onLogin(values["email"], values["password"])
      .catch((err) => {
        switch (err) {
          case 400:
            setError(MESSAGE_INCORRECT_USER_DATA);
            break;
          case 401:
            setError(MESSAGE_INCORRECT_EMAIL_OR_PASS);
            break;
          default:
            setError(error);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <LoginForm
      title={LOGIN_FORM_TITLE}
      submitTitle={LINK_SIGNIN_TITLE}
      subtitleText={LOGIN_FORM_REGISTER_TITLE}
      subtitleLinkText={LINK_SIGNUP_TITLE}
      subtitleLink="/signup"
      onSubmit={handleSubmit}
      isValid={isValid}
      error={error}
      isLoading={isLoading}
    >
      <EntryField
        id="email"
        name="email"
        type="email"
        placeholder={FORM_EMAIL_INPUT_PLACEHOLDER}
        value={values["email"] || ""}
        errors={errors}
        onChange={handleChange}
      />
      <EntryField
        id="password"
        name="password"
        type="password"
        placeholder={FORM_PASSWD_INPUT_PLACEHOLDER}
        value={values["password"] || ""}
        errors={errors}
        onChange={handleChange}
      />
    </LoginForm>
  );
}

export default Login;
