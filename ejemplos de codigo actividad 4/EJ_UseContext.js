import React, { createContext, useContext } from 'react';

// Creamos un contexto
const MiContexto = createContext();

// Componente que consume el contexto
function ComponenteConsumidor() {
  // Utilizamos el hook useContext para acceder al contexto
  const datosCompartidos = useContext(MiContexto);

  return <div>{datosCompartidos}</div>;
}

// Componente principal
function App() {
  return (
    <MiContexto.Provider value="Estos son los datos compartidos">
      <ComponenteConsumidor />
    </MiContexto.Provider>
  );
}

export default App;


