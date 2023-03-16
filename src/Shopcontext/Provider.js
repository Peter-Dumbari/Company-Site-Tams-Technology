import React, { createContext, useReducer } from "react";
import Itemstate from "./InitialState/Itemstate";
import auth from "./Reducers/Auth";

export const GlobalContext = createContext({});

function GlobalProvider({ children }) {
  const [items, authDispatch] = useReducer(auth, Itemstate);

  return (
    <GlobalContext.Provider value={{ items, authDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
