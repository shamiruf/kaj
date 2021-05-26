import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const RevenueList = () => {
  const { revenueTransactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="purchases purchases-revenue">
      <h2>Revenue transaction history</h2>
      <ul className="purchase-list">
        <div className="transaction-container">
          {revenueTransactions.map((transaction, index) => {
            return (
              <li key={index} className="purchase">
                <span className="purchase-text">{transaction.revenueText}</span>
                <span className="purchase-amount">
                  {transaction.revenueAmount}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  onClick={() => {
                    deleteTransaction(transaction.id);
                  }}
                  className="delete-btn"
                >
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default RevenueList;
