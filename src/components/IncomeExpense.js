import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const incomes = transactions.filter(transaction => transaction.amount > 0);
  const expenses = transactions.filter(transaction => transaction.amount < 0);

  const income = incomes
    .map(income => income.amount)
    .reduce((acc, curr) => (acc += curr), 0);

  const expense = expenses
    .map(expense => expense.amount)
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
