import { createContext, useState } from "react";

//1-Creamos y exportamos el hook CREATECONTEXT (creamos el contexto)
export const UserContext = createContext();

//2-Creamos y exportamos el proveedor del hook CREATECONTEXT que va a afectar a determinado hijos y que va a tener ciertas cosas adentro que luego lo vamos a retornar con una etiqueta que va a tener un valor que va a afectar a los children que tenga adentro.
//3- Creamos un usuario que lo declaramos con userState "undefined" y lo importamos arriba.
//4- Creamos una funcion de Login
//5- Creamos la funcion de Logout
//6- Estas 3 funciones es lo que vamos a sacar como valor de retorno. Son las 3 cosas que quiero que todo el mundo lea.
//7- Terminado esta parte debo importar la funcion "userContext.Provider" al archivo APP.jsx.

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  const login = () => {
    setUser("Pedro");
  };

  const logout = () => {
    setUser(undefined);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
