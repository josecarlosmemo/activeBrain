import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import Card from "../components/UI/Card";

function Login() {
  return (
    <Fragment>
      <h1>Iniciar Sesión</h1>
      <Card>
        <LoginForm />
      </Card>
    </Fragment>
  );
}

export default Login;
