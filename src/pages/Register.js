import React, { Fragment } from "react";
import RegisterForm from "../components/forms/RegisterForm";
import Card from "../components/UI/Card";

function Register() {
  return (
    <Fragment>
      <h1>Register Page</h1>
      <Card>
        <RegisterForm />
      </Card>
    </Fragment>
  );
}

export default Register;
