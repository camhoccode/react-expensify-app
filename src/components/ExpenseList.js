import React from "react";
import { useSelector } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";

const ExpenseList = () => {
  const expenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters),
  );
  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-item--message">
        {expenses.length === 0 && <p>No Expenses</p>}
      </div>
      <div className="list-body">
        {expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })}
      </div>
    </div>
  );
};

export default ExpenseList;
