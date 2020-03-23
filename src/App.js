import React from "react";
import GlobalContextProvider from "./context/GlobalContext";
import "./App.css";

import { Header } from "./components/Header";
import { TransactionList } from "./components/TransactionList";
import { TransactionForm } from "./components/TransactionForm";
import { Balance } from "./components/Balance";

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Header />
        <Balance />
        <TransactionList />
        <TransactionForm />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
