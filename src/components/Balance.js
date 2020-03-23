import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const prices = transactions.map(transaction => transaction.amount);
  const total = prices.reduce((acc, curr) => acc + curr, 0);
  console.log(prices);

  return <h1>£{total}</h1>;
};
