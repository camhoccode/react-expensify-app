import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startDeleteExpense, startEditExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
  const { id } = useParams();
  // const expense = useSelector(store => store.expenses);
  const navigate = useNavigate();
  return (
    <div>
      <ExpenseForm
        expense={props.expenses.find((expense) => expense.id === id)}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(id, expense));
          navigate("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(startDeleteExpense(id));
          navigate("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses,
  };
};

export default connect(mapStateToProps)(EditExpensePage);
