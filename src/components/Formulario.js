import React from "react";
import ContenedorPresupuesto from "../elements/ContenedorPresupuesto";
import { Input } from "../elements/InputsVariados";
export const Formulario = () => {
  return (
    <ContenedorPresupuesto>
      <Input type="text" placeholder="Ingrese la descripción del gasto" />
      <Input style={{ marginTop: 35 }} type="number" />
    </ContenedorPresupuesto>
  );
};
