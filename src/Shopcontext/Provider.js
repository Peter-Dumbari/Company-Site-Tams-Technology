import React, { createContext, useReducer } from "react";
import Itemstate from "./InitialState/Itemstate";
import auth from "./Reducers/Auth";
import image from "../Assets/Images/iwatch.png";

export const GlobalContext = createContext({});

function GlobalProvider({ children }) {
  const [items, authDispatch] = useReducer(auth, Itemstate);

  const Toprateditems = [
    {
      id: 0,
      image: image,
      name: "Iwatch 2 2020",
      discount: "5%",
      oldprice: "$120",
      newprice: "$100",
      promo: true,
    },
    {
      id: 1,
      image: image,
      name: "Iwatch 1 Mini",
      discount: "2%",
      oldprice: "$45",
      newprice: "$40",
      promo: false,
    },
    {
      id: 2,
      image: image,
      name: "Iwatch 1 Mini",
      discount: "2%",
      oldprice: "$45",
      newprice: "$40",
      promo: false,
      link: "/item_detail",
    },
  ];

  return (
    <GlobalContext.Provider value={{ items, authDispatch, Toprateditems }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
