import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Personajes from "./Components/Personajes/Personajes";
import { UserContextProvider } from "./context/context";

const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <div className="contenedor">
          <Nav />
          <Personajes />
        </div>
      </UserContextProvider>
    </div>
  );
};

export default App;
