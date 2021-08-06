import React, { useState } from "react";
import { Titleh1, Titleh2 } from "./elements/Titulos";

import { Pregunta } from "./components/Pregunta";
import { Formulario } from "./components/Formulario";
import { Resumen } from "./components/Resumen";
import { ContenedorVista } from "./elements/ContenedorVista";
import { AuthProvider, useGastos } from "./context/principalContext";
export const App = () => {
  const [centinel, setCentinel] = useState(false);

  return (
    <AuthProvider>
      <Titleh1>Gasto Semanal</Titleh1>
      {!centinel ? (
        <Pregunta setCentinel={setCentinel} />
      ) : (
        <ContenedorVista>
          <Formulario />
          <Resumen />
        </ContenedorVista>
      )}
    </AuthProvider>
  );
};
