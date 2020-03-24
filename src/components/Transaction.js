import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const Transaction = ({ name, amount, id }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <>
      <li>
        <div>
          Item: {name}, Price: {amount}
          <button onClick={() => deleteTransaction(id)}>X</button>
        </div>
      </li>
    </>
  );
};
