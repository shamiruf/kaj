import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  revenueTransactions:
    JSON.parse(localStorage.getItem("revenueTransactions")) || [],
  costTransactions: JSON.parse(localStorage.getItem("costTransactions")) || [],
};

export const GlobalContext = createContext(initialState);
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    localStorage.setItem(
      "revenueTransactions",
      JSON.stringify(state.revenueTransactions)
    );
    localStorage.setItem(
      "costTransactions",
      JSON.stringify(state.costTransactions)
    );
  });
  const addCost = (costTransaction) => {
    dispatch({
      type: "ADD_COST",
      payload: costTransaction,
    });
  };
  const addRevenue = (revenueTransaction) => {
    dispatch({
      type: "ADD_REVENUE",
      payload: revenueTransaction,
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        costTransactions: state.costTransactions,
        addCost,
        revenueTransactions: state.revenueTransactions,
        addRevenue,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
