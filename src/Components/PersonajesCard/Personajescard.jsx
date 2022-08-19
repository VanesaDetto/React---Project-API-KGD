import React from "react";
import "./Personajescard.css";

const PersonajesCard = ({ personajeInfo }) => {
  return (
    <figure className="personajescard">
      <img src={personajeInfo.imagen} alt={personajeInfo.name} />
      <div className="textcard">
        <h3>{personajeInfo.name}</h3>
        <h4>{personajeInfo.papel}</h4>
      </div>
    </figure>
  );
};

export default PersonajesCard;
