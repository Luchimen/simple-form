import React, { useState } from "react";
import { Titleh1, Titleh2 } from "../elements/Titulos";
import { Input } from "../elements/InputsVariados";
import { Boton } from "../elements/Boton";
import ContenedorPresupuesto from "../elements/ContenedorPresupuesto";
import { useGastos } from "../context/principalContext";
export const Pregunta = ({ setCentinel }) => {
  const { setPresupuesto } = useGastos();

  const [input, setInput] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCentinel(true);
    setPresupuesto(input);
  };

  return (
    <ContenedorPresupuesto onSubmit={handleSubmit}>
      <Titleh2>Coloca tu presupuesto</Titleh2>
      <Input
        type="number"
        placeholder="Ingrese su presupuesto"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Boton type="submit">Aceptar</Boton>
    </ContenedorPresupuesto>
  );
};
