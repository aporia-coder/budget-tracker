import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(amount => amount > 0)
    .reduce((acc, curr) => (acc += curr), 0);

  const expense = amounts
    .filter(amount => amount < 0)
    .reduce((acc, curr) => (acc += curr), 0);

  return (
    <div className="container-income">
      <div>
        Income: <p className="income">£{income}</p>
      </div>
      <div>
        Expenses: <p className="expense">£{expense}</p>
      </div>
    </div>
  );
};
