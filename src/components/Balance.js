import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const prices = transactions.map(transaction => transaction.amount);
  const total = prices.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="container-balance">
      <p className="balance">YOUR BALANCE:</p>
      <h2>£{total}</h2>
    </div>
  );
};
