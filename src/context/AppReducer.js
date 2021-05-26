// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "ADD_COST":
      return {
        ...state,
        costTransactions: [action.payload, ...state.costTransactions],
      };
    case "ADD_REVENUE":
      return {
        ...state,
        revenueTransactions: [action.payload, ...state.revenueTransactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        revenueTransactions: state.revenueTransactions.filter(
          (revenueTransaction) => revenueTransaction.id !== action.payload
        ),
        costTransactions: state.costTransactions.filter(
          (costTransaction) => costTransaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
