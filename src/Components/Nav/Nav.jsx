import React, { useContext, useState } from "react";
import { UserContext } from "../../context/context";
import "./Nav.css";

const nav = () => {
  const { user, login, logout } = useContext(UserContext);
  const [Encuesta, setEncuesta] = useState("");

  return (
    <nav className="navegador">
      {user != undefined ? (
        <>
          <p>HI! {user} </p>
          <button onClick={() => logout()}>LOGOUT</button>
          <div className="buttonencuesta">
            <div>
              <button onClick={() => setEncuesta("COOL!")}>LIKE</button>
              <button onClick={() => setEncuesta("YOU DON'T KNOW NOTHING")}>
                DON'T LIKE
              </button>
            </div>
            <div>
              <p>{Encuesta}</p>
            </div>
          </div>
        </>
      ) : (
        <button onClick={() => login()}>LOGIN</button>
      )}
    </nav>
  );
};

export default nav;
