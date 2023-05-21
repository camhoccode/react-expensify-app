import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startDeleteExpense, startEditExpense } from "../actions/expenses";
import withAuth from "../hoc/withAuth";

const EditExpensePage = (props) => {
  const { id } = useParams();
  const expenses = useSelector((store) => store.expenses);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          expense={expenses.find((expense) => expense.id === id)}
          onSubmit={(expense) => {
            dispatch(startEditExpense(id, expense));
            navigate("/dashboard");
          }}
        />
        <button
          className="button button__remove"
          onClick={() => {
            dispatch(startDeleteExpense(id));
            navigate("/dashboard");
          }}
        >
          Remove Expense
        </button>
      </div>
    </div>
  );
};

export default withAuth(EditExpensePage);
