import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <ul>
        {transactions.map(transaction => (
          <Transaction
            id={transaction.id}
            key={transaction.id}
            name={transaction.name}
            amount={transaction.amount}
          />
        ))}
      </ul>
    </div>
  );
};
