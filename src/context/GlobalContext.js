import React, { createContext, useState } from "react";
import uuid from "react-uuid";

export const GlobalContext = createContext();

const GlobalContextProvider = props => {
  const [transactions, setTransactions] = useState([
    {
      name: "Rent",
      amount: -400,
      id: uuid(),
    },
    {
      name: "Headphones",
      amount: -120,
      id: uuid(),
    },
    {
      name: "Car",
      amount: -500,
      id: uuid(),
    },
    {
      name: "Insurance",
      amount: -1000,
      id: uuid(),
    },
    {
      name: "Salary",
      amount: 2000,
      id: uuid(),
    },
    {
      name: "Stocks",
      amount: 1200,
      id: uuid(),
    },
  ]);

  const addTransaction = (name, amount) => {
    setTransactions([...transactions, { name, amount, id: uuid() }]);
  };

  const deleteTransaction = id => {
    let delArr = transactions.filter(transaction => transaction.id !== id);
    console.log(delArr);
    setTransactions([...delArr]);
  };

  return (
    <GlobalContext.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
