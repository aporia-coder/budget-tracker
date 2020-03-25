import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { MdDelete } from "react-icons/md";

export const Transaction = ({ name, amount, id }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = amount > 0 ? "+" : "-";
  return (
    <>
      <li className={amount > 0 ? "plus" : "minus"}>
        <MdDelete onClick={() => deleteTransaction(id)} className="delete" />
        <span style={{ fontWeight: "bold" }}>{name}:</span>
        <span>
          {sign}£{Math.abs(amount)}
        </span>
      </li>
    </>
  );
};
