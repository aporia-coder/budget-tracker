import uuid from "react-uuid";

export const TransactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [
        ...state,
        {
          name: action.payload.name,
          amount: action.payload.amount,
          id: uuid(),
        },
      ];
    case "DELETE_TRANSACTION":
      return state.filter(transaction => transaction.id !== action.payload);
    default:
      return state;
  }
};
