import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddRevenueTransaction = () => {
  const { addRevenue } = useContext(GlobalContext);

  // revenue
  const [revenue, setRevenue] = useState({
    revenueText: "",
    revenueAmount: 0,
  });
  const { revenueText, revenueAmount } = revenue;

  // change revenue list on change
  const onChangeRevenue = (e) => {
    setRevenue({ ...revenue, [e.target.name]: e.target.value });
  };

  // add revenue
  const onSubmitRevenue = (e) => {
    e.preventDefault();
    console.log(revenueText);
    if (revenueText !== "" && revenueAmount !== 0) {
      const newTransaction = {
        id: uuidv4(),
        revenueText,
        revenueAmount: revenueAmount * 1,
      };
      addRevenue(newTransaction);
      setRevenue({ revenueText: "", revenueAmount: 0 });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitRevenue}>
        <div className="input-class revenue">
          <input
            type="text"
            name="revenueText"
            value={revenueText}
            placeholder="Add revenue"
            autoComplete="off"
            onChange={onChangeRevenue}
          />
          <input
            type="number"
            name="revenueAmount"
            value={revenueAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeRevenue}
          />
          <input className="submit" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddRevenueTransaction;
