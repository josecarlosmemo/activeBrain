import React from "react";

import Card from "../UI/Card";

function PacienteItem(props) {
  return (
    <li>
      <Card>{props.paciente.nombre}</Card>
    </li>
  );
}

export default PacienteItem;
