import React from "react";
import ExpenseForm from "./ExpenseForm";
import { useDispatch } from "react-redux";
import { startAddExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";
import withAuth from "../hoc/withAuth";

const AddExpensePage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          onSubmit={(expense) => {
            dispatch(startAddExpense(expense));
            navigate("/dashboard");
          }}
        />
      </div>
    </div>
  );
};
export default withAuth(AddExpensePage);
