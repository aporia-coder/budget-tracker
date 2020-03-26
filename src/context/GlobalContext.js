import React, { createContext, useReducer, useEffect } from "react";
import { TransactionReducer } from "../reducer/TransactionReducer";

export const GlobalContext = createContext();

const GlobalContextProvider = props => {
  const [transactions, dispatch] = useReducer(TransactionReducer, [], () => {
    const localData = localStorage.getItem("transactions");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);
  return (
    <GlobalContext.Provider value={{ transactions, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
