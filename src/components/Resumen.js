import React from "react";
import { useGastos } from "../context/principalContext";
import { Input } from "../elements/InputsVariados";

export const Resumen = () => {
  const { presupuesto } = useGastos();

  return (
    <div>
      <label>{presupuesto}</label>
    </div>
  );
};
