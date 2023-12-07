import React from "react";
import { Route, Routes } from "react-router-dom";
import Portada from "./componentes/Portada";
import Juego from "./componentes/Juego";
import Final from "./componentes/Final";
import Ganado from "./componentes/Ganado";
import Provider from "./contexto/Provider";

const App = () => {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="juego" element={<Juego />} />
        <Route path="final" element={<Final />} />
        <Route path="ganado" element={<Ganado />} />
      </Routes>
    </Provider>
  );
};

export default App;
