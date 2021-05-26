import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddCostTransaction = () => {
  const { addCost } = useContext(GlobalContext);

  // cost
  const [cost, setCost] = useState({
    costText: "",
    costAmount: 0,
  });
  const { costText, costAmount } = cost;

  // change cost list on change
  const onChangeCost = (e) => {
    setCost({ ...cost, [e.target.name]: e.target.value });
  };

  // add cost
  const onSubmitCost = (e) => {
    e.preventDefault();
    if (costText !== "" && costAmount !== 0) {
      const newTransaction = {
        id: uuidv4(),
        costText,
        costAmount: costAmount * 1,
      };
      addCost(newTransaction);
      setCost({
        costText: "",
        costAmount: 0,
      });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitCost}>
        <div className="input-class cost">
          <input
            type="text"
            name="costText"
            value={costText}
            placeholder="Add cost"
            autoComplete="off"
            onChange={onChangeCost}
          />
          <input
            type="number"
            name="costAmount"
            value={costAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeCost}
          />
          <input className="submit" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddCostTransaction;
