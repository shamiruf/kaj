import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const TotalBalance = () => {
  const { revenueTransactions, costTransactions } = useContext(GlobalContext);
  // get amount of revenue in revenueAmounts array
  const revenueAmounts = revenueTransactions.map(
    (revenueTransaction) => revenueTransaction.revenueAmount
  );
  // get amount of cost in costAmounts array
  const costAmounts = costTransactions.map(
    (costTransaction) => costTransaction.costAmount
  );
  // get total revenue from revenue amount array and get two digits after the decimal point
  const totalRevenue = revenueAmounts
    .reduce((acc, amount) => {
      return (acc += amount);
    }, 0)
    .toFixed(2);
  // get total cost from cost amount array and get two digits after the decimal point
  const totalCost = costAmounts
    .reduce((acc, amount) => {
      return (acc += amount);
    }, 0)
    .toFixed(2);
  return (
    <div className="balance">
      <h2>Total balance:</h2>
      <h3>{(totalRevenue - totalCost).toFixed(2)}$</h3>
      <div className="accounting">
        <div className="revenue revenue-text">
          <h4>Revenue</h4>
          <p>+ {totalRevenue}$</p>
        </div>
        <div className="cost cost-text">
          <h4>Costs</h4>
          <p>- {totalCost}$</p>
        </div>
      </div>
    </div>
  );
};

export default TotalBalance;
