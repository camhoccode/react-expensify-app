import React from "react";
import { useSelector } from "react-redux";
import numeral from "numeral";
import getVisibleExpenses from "../selectors/expenses";

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
    <div>
      {!expensesData.length ? (
        <p>Viewing 0 expenses</p>
      ) : (
        <p>
          Viewing {expensesData.length} {expensesCount}, totalling {total()}
        </p>
      )}
    </div>
  );
}

export default Sumary;
