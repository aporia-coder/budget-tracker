import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const TransactionForm = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTransaction(name, amount);
    setName("");
    setAmount("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Item: </span>
          <input
            type="text"
            value={name}
            placeholder="Enter Item..."
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <span>Amount: </span>
          <input
            type="number"
            value={amount}
            placeholder="Enter Price..."
            onChange={e => setAmount(parseInt(e.target.value))}
            required
          />
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
