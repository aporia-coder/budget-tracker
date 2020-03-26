import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return transactions.length === 0 ? (
    <h3 style={{ paddingBottom: "1rem" }}>No Transactions</h3>
  ) : (
    <div>
      <h3
        style={{
          borderBottom: "1px solid rgba(10, 10, 10, 0.3)",
          marginBottom: "1rem",
          paddingBottom: "1rem",
          display: "flex",
        }}
      >
        Transactions:
      </h3>
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
