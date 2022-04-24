import React from "react";
import useInput from "../../hooks/use-input";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";

const isEmpty = (value) => value.trim() !== "";

function RegisterForm() {
  const navigate = useNavigate();

  const {
    value: enteredNombre,
    hasError: nombreHasError,
    isValid: nombreIsValid,
    inputBlurHandler: nombreBlurHandler,
    reset: nombreReset,
    valueChangedHandler: nombreValueChangedHandler,
  } = useInput(isEmpty);

  const {
    value: enteredApellidoP,
    hasError: apellidoPHasError,
    isValid: apellidoPIsValid,
    inputBlurHandler: apellidoPBlurHandler,
    reset: apellidoPReset,
    valueChangedHandler: apellidoPValueChangedHandler,
  } = useInput(isEmpty);

  const {
    value: enteredApellidoM,
    hasError: apellidoMHasError,
    isValid: apellidoMIsValid,
    inputBlurHandler: apellidoMBlurHandler,
    reset: apellidoMReset,
    valueChangedHandler: apellidoMValueChangedHandler,
  } = useInput(isEmpty);

  const {
    value: enteredSex,
    hasError: sexHasError,
    isValid: sexIsValid,
    inputBlurHandler: sexBlurHandler,
    reset: sexReset,
    valueChangedHandler: sexValueChangedHandler,
  } = useInput(isEmpty);

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
  } = useInput(isEmpty);

  let isFormValid = false;

  if (
    emailIsValid &&
    passwordIsValid &&
    nombreIsValid &&
    apellidoPIsValid &&
    apellidoMIsValid &&
    sexIsValid
  ) {
    isFormValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    console.log(`Correo: ${enteredEmail}`);
    console.log(`Contraseña: ${enteredPassword}`);
    console.log(`Nombre: ${enteredNombre}`);
    console.log(`ApellidoP: ${enteredApellidoP}`);
    console.log(`ApellidoM: ${enteredApellidoM}`);
    console.log(`Sexo: ${enteredSex}`);

    navigate("/home");

    emailReset();
    passwordReset();
    nombreReset();
    apellidoPReset();
    apellidoMReset();
    sexReset();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div
        className={`${styles["form-control"]} ${
          nombreHasError && styles["invalid"]
        }`}
      >
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          onChange={nombreValueChangedHandler}
          onBlur={nombreBlurHandler}
          value={enteredNombre}
          type="text"
        />
        {nombreHasError && (
          <p className={styles["error-text"]}>
            El nombre no puede estar vacío.
          </p>
        )}
      </div>

      <div
        className={`${styles["form-control"]} ${
          apellidoPHasError && styles["invalid"]
        }`}
      >
        <label htmlFor="apellidoP">Primer Apellido</label>
        <input
          id="apellidoP"
          onChange={apellidoPValueChangedHandler}
          onBlur={apellidoPBlurHandler}
          value={enteredApellidoP}
          type="text"
        />
        {apellidoPHasError && (
          <p className={styles["error-text"]}>
            El primer apellido no puede estar vacío.
          </p>
        )}
      </div>

      <div
        className={`${styles["form-control"]} ${
          apellidoMHasError && styles["invalid"]
        }`}
      >
        <label htmlFor="apellidoM">Segundo Apellido</label>
        <input
          id="apellidoM"
          onChange={apellidoMValueChangedHandler}
          onBlur={apellidoMBlurHandler}
          value={enteredApellidoM}
          type="text"
        />
        {apellidoMHasError && (
          <p className={styles["error-text"]}>
            El segundo apellido no puede estar vacío.
          </p>
        )}
      </div>

      <div
        className={`${styles["form-control"]} ${
          sexHasError && styles["invalid"]
        }`}
      >
        <label htmlFor="sex">Sexo</label>
        <select
          id="sex"
          onChange={sexValueChangedHandler}
          onBlur={sexBlurHandler}
          value={enteredSex}
        >
          <option value=""></option>
          <option value="H">Hombre</option>
          <option value="M">Mujer</option>
        </select>
        {sexHasError && (
          <p className={styles["error-text"]}>Se debe especificar el sexo.</p>
        )}
      </div>

      <div
        className={`${styles["form-control"]} ${
          emailHasError && styles["invalid"]
        }`}
      >
        <label htmlFor="email">Correo Electrónico</label>
        <input
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          type="email"
        />
        {emailHasError && (
          <p className={styles["error-text"]}>
            Ingrese un Correo Electrónico válido.
          </p>
        )}
      </div>
      <div
        className={`${styles["form-control"]} ${
          passordHasError && styles["invalid"]
        }`}
      >
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          onChange={passwordChangedHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
          type="password"
        />
        {passordHasError && (
          <p className={styles["error-text"]}>
            La contraseña no puede estar vacía.
          </p>
        )}
      </div>
      <div className={styles["form-actions"]}>
        <button
          disabled={!isFormValid}
          className={styles["button"]}
          type="submit"
        >
          Registro
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
