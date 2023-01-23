import React, { useState } from "react";
import LoginForm from "../../LoginForm/LoginForm";
import EntryField from "../../EntryField/EntryField";
import { useFormAndValidation } from "../../../hooks/useFormAndValidation";
import {
  MESSAGE_CONFLICT_EMAIL,
  MESSAGE_INCORRECT_USER_DATA,
  namePattern,
  REGISTR_FORM_LOGIN_TITLE,
  FORM_NAME_INPUT_PLACEHOLDER,
  REGISTR_FORM_SUBMIT_TITLE,
  REGISTR_FORM_TITLE,
  FORM_EMAIL_INPUT_PLACEHOLDER,
  FORM_PASSWD_INPUT_PLACEHOLDER,
  LINK_SIGNIN_TITLE,
} from "../../../utils/constants";

function Register(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { values, isValid, errors, handleChange } = useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    props
      .onRegister(values["name"], values["email"], values["password"])
      .catch((err) => {
        switch (err) {
          case 400:
            setError(MESSAGE_INCORRECT_USER_DATA);
            break;
          case 409:
            setError(MESSAGE_CONFLICT_EMAIL);
            break;
          default:
            setError(error);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <LoginForm
      title={REGISTR_FORM_TITLE}
      submitTitle={REGISTR_FORM_SUBMIT_TITLE}
      subtitleText={REGISTR_FORM_LOGIN_TITLE}
      subtitleLinkText={LINK_SIGNIN_TITLE}
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
        placeholder={FORM_NAME_INPUT_PLACEHOLDER}
        value={values["name"] || ""}
        errors={errors}
        onChange={handleChange}
        pattern={namePattern.pattern}
        title={namePattern.title}
      />
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

export default Register;
