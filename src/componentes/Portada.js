import React from "react";
import { useNavigate } from "react-router-dom";

const Portada = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Bienvenido</div>
      <button className="boton" onClick={() => navigate("/juego")}>
        Jugar
      </button>
    </>
  );
};

export default Portada;
