import React from "react";
import GlobalContextProvider from "./context/GlobalContext";

import { Header } from "./components/Header";
import { TransactionList } from "./components/TransactionList";
import { TransactionForm } from "./components/TransactionForm";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";

function App() {
  return (
    <div className="container">
      <GlobalContextProvider>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <TransactionForm />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
