import React from "react";

export const Transaction = ({ name, amount }) => {
  return (
    <li>
      Item: {name}, Price: {amount}
    </li>
  );
};
