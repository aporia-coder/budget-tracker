import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const TransactionForm = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTransaction(name, amount);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>Item: </span>
        <input
          type="text"
          value={name}
          placeholder="Enter Item"
          onChange={e => setName(e.target.value)}
          required
        />
        <span>Amount: </span>
        <input
          type="number"
          value={amount}
          placeholder="Enter Price"
          onChange={e => setAmount(parseInt(e.target.value))}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
