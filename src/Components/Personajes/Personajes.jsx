import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import PersonajesCard from "../PersonajesCard/Personajescard";
import "./Personajes.css";
import { UserContext } from "../../context/context";

const Personajes = () => {
  const [PersonajesList, setPersonajesList] = useState([]);
  const { user } = useContext(UserContext);
  const getPersonajes = async () => {
    const rawData = await axios.get(
      "https://kingdom-api.vercel.app/api/personaje"
    );
    setPersonajesList(rawData.data.data.personaje);
  };

  useEffect(() => {
    getPersonajes();
  }, []);
  return (
    <section className="containerpersonajes">
      {PersonajesList.length > 0 ? (
        user != undefined ? (
          PersonajesList.map((personaje) => (
            <PersonajesCard personajeInfo={personaje} key={personaje._id} />
          ))
        ) : (
          <h2>PLEASE, LOGIN</h2>
        )
      ) : (
        <p>Cargando personajes...</p>
      )}
    </section>
  );
};

export default Personajes;
