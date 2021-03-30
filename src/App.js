import React, { useState } from "react";
import { Cita } from "./components/Cita";
import { Formulario } from "./components/Formulario";

export const App = () => {
  const [citas, setCitas] = useState([]);

  return (
    <div>
      <h1>Administrador de pacientes</h1>
      <div className="contenedor">
        <Formulario setCitas={setCitas} citas={citas} />
        {citas.length === 0 ? (
          <h2>No hay citas programadas</h2>
        ) : (
          <Cita setCitas={setCitas} citas={citas} />
        )}
      </div>
    </div>
  );
};
