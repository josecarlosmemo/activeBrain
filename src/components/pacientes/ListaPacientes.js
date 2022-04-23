import React from "react";

import pacientes from "../../dummy_data";
import PacienteItem from "./PacienteItem";

function ListaPacientes() {
  return (
    <section>
      <h2>Lista de Pacientes</h2>
      <ul>
        {pacientes.map((paciente) => (
          <PacienteItem key={paciente.id} paciente={paciente} />
        ))}
      </ul>
    </section>
  );
}

export default ListaPacientes;
