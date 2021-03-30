import React, { useState } from "react";

export const Formulario = ({ setCitas, citas }) => {
  const [inputs, setInputs] = useState({
    nombre: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const { nombre, fecha, hora, sintomas } = inputs;

  const submitForm = (e) => {
    e.preventDefault();
    setCitas([...citas, inputs]);
    
  };

  return (
    <div className="contenedor1">
      <h2>Ingrese un paciente</h2>
      <form className="formulario" onSubmit={submitForm}>
        <input
          placeholder="Nombre de Mascota"
          name="nombre"
          type="text"
          value={nombre}
          onChange={(e) => {
            setInputs({ ...inputs, [e.target.name]: e.target.value });
          }}
        />
        <input
          name="fecha"
          type="date"
          value={fecha}
          onChange={(e) => {
            setInputs({ ...inputs, [e.target.name]: e.target.value });
          }}
        />
        <input
          name="hora"
          type="time"
          value={hora}
          onChange={(e) => {
            setInputs({ ...inputs, [e.target.name]: e.target.value });
          }}
        />
        <input
          placeholder="Sintomas"
          name="sintomas"
          type="text"
          value={sintomas}
          onChange={(e) => {
            setInputs({ ...inputs, [e.target.name]: e.target.value });
          }}
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};
