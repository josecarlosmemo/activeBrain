import React, { Fragment } from "react";
import ListaPacientes from "../components/pacientes/ListaPacientes";
function Home() {
  return (
    <Fragment>
      <h1>Home Page</h1>
      <ListaPacientes />
    </Fragment>
  );
}

export default Home;
