import React from "react";
import { useSelector } from "react-redux";
import numeral from "numeral";
import getVisibleExpenses from "../selectors/expenses";
import { Link } from "react-router-dom";

function Sumary() {
  const expensesData = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters),
  );
  const expensesCount = expensesData.length === 1 ? "expense" : "expenses";
  const total = () => {
    let totalAmount = 0;
    for (let index = 0; index < expensesData.length; index++) {
      totalAmount += expensesData[index].amount;
    }
    return numeral(totalAmount / 100).format("$0,0.00");
  };
  return (
    <div className="page-header">
      <div className="content-container">
        {!expensesData.length ? (
          <p>Viewing 0 expenses</p>
        ) : (
          <div>
            <h1 className="page-header__title">
              Viewing <span>{expensesData.length}</span> {expensesCount},
              totalling <span>{total()}</span>
            </h1>
            <div className="page-header__actions">
              <Link className="button" to="/create">
                Add Expense
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sumary;
