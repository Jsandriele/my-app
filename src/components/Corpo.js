import React from "react";
import Perfil from "./picture/perfil.png";
import "./Corpo.css";

export default function Corpo() {
  return (
    <div className="container">
      <div className="descricao">
        <h1>Oi,</h1>
        <p>Sou JAQUELINE SANDRIELE</p>
        
        <p>Desenvolvedor Front-End.</p>
      </div>
      <img src={Perfil} className="perfil" alt="perfil" />
    </div>
  );
}
