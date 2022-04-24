import React from "react";
import useInput from "../../hooks/use-input";

function LoginForm() {
  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
    valueChangedHandler: emailChangedHandler,
  } = useInput((email) => email.includes("@"));
  const {
    value: enteredPassword,
    hasError: passordHasError,
    isValid: passwordIsValid,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
    valueChangedHandler: passwordChangedHandler,
  } = useInput((password) => password.trim() !== "");

  let isFormValid = false;

  if (emailIsValid && passwordIsValid) {
    isFormValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }

    console.log(`Correo: ${enteredEmail}`);
    console.log(`Contraseña: ${enteredPassword}`);

    emailReset();
    passwordReset();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div>
        <label htmlFor="email">Correo Electrónico</label>
        <input
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          type="email"
        />
        {emailHasError && <p>Ingrese un Correo Electrónico válido.</p>}
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          onChange={passwordChangedHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
          type="password"
        />
        {passordHasError && <p>La contraseña no puede estar vacía.</p>}
      </div>
      <div>
        <button type="submit">Iniciar Sesión</button>
      </div>
    </form>
  );
}

export default LoginForm;
