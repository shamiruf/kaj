import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const CostList = () => {
  const { costTransactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="purchases purchases-cost">
      <h2>Cost transaction history</h2>
      <ul className="purchase-list">
        {costTransactions.map((transaction, index) => {
          return (
            <li key={index} className="purchase">
              <span className="purchase-text">{transaction.costText}</span>
              <span className="purchase-amount">{transaction.costAmount}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                className="delete-btn"
                onClick={() => {
                  deleteTransaction(transaction.id);
                }}
              >
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CostList;
