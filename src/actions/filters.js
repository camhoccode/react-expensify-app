// SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});
// SORT_BY_DATE
export const sortByDate = () => ({
  type: "SET_DATE_FILTER",
});
// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: "SET_AMOUNT_FILTER",
});
// SET_START_DATE
export const setStartDate = (number) => ({
  type: "SET_START_DATE",
  number,
});
// SET_END_DATE
export const setEndDate = (number) => ({
  type: "SET_END_DATE",
  number,
});
