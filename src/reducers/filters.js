import moment from "moment";

// Filters Reducer
const filterReducerDefaultState = {
  text: "",
  sortBy: "date", // date or amount
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SET_DATE_FILTER":
      return { ...state, sortBy: "date" };
    case "SET_AMOUNT_FILTER":
      return { ...state, sortBy: "amount" };
    case "SET_START_DATE":
      return { ...state, startDate: action.number };
    case "SET_END_DATE":
      return { ...state, endDate: action.number };
    default:
      return state;
  }
};
export default filterReducer;
