import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import Sumary from "./Sumary";

const ExpenseDashboardPage = () => (
  <div>
    <Sumary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);
export default ExpenseDashboardPage;
