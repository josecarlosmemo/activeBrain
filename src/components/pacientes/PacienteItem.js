import React from "react";

import Card from "../UI/Card";

function PacienteItem(props) {
  return (
    <li>
      <Card>
        <p>{props.paciente.nombre}</p>
        <p>{props.paciente.apellidoP}</p>
      </Card>
    </li>
  );
}

export default PacienteItem;
