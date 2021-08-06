import React, { useContext, useState } from "react";

//Aqui estamos creando la variable del contexto
const PrincipalContext = React.createContext();

//Creando el hook para acceder al contexto
const useGastos = () => {
  return useContext(PrincipalContext);
};

const AuthProvider = ({ children }) => {
  //const [loading, setLoading] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [presupuesto, setPresupuesto] = useState(0);

  return (
    <PrincipalContext.Provider
      value={{ gastos, setGastos, presupuesto, setPresupuesto }}
    >
      {children}
    </PrincipalContext.Provider>
  );
};

export { AuthProvider, PrincipalContext, useGastos };
