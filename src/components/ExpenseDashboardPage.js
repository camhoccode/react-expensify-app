import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import Sumary from "./Sumary";
import withAuth from "../hoc/withAuth";

const ExpenseDashboardPage = () => (
  <div>
    <Sumary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);
export default withAuth(ExpenseDashboardPage);
