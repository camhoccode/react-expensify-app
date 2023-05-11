import testingExpensesArray from "./expense.js";
import numeral from "numeral";

// console.log(testingExpensesArray);
const sumaryExpenseList = (arr) => {
  if (arr.length === 0) return "no expense";
  let sumAmount = 0;
  for (let i = 0; i < arr.length; i++) {
    sumAmount += arr[i].amount;
  }
  return numeral(sumAmount / 100).format("$0,0.00");
};

console.log(sumaryExpenseList(testingExpensesArray));
