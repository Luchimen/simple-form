import React from "react";

export const Cita = ({ setCitas, citas }) => {
  console.log(citas);
  return (
    <div>
      <h2>Citas programadas!</h2>
      {citas.map((cita, index) => {
        return (
          <div key={index} className="cita">
            <p>{cita.nombre}</p>
            <p>{cita.fecha}</p>
            <p>{cita.hora}</p>
            <p>{cita.sintomas}</p>
          </div>
        );
      })}
    </div>
  );
};
