import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Fragment>
      <h1>Login Page</h1>
      <Link to="/home">Home</Link>
    </Fragment>
  );
}

export default Login;
