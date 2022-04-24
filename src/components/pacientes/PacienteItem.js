import React from "react";
import { Link } from "react-router-dom";

import Card from "../UI/Card";

function PacienteItem(props) {
  return (
    <li className="list-none">
      <Card>
        <div className="flex">
          <p>Nombre: {props.nombre}</p>
          <p>Edad: {props.edad}</p>
          <Link to="" className="">
            Enable
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default PacienteItem;
