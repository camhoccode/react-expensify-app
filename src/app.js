import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import "normalize.css/normalize.css";
// import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configStore from "./store/configstore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";

export const store = configStore();

store.dispatch(
  addExpense({ description: "water bill", amount: 22, createdAt: 1000 }),
);
store.dispatch(
  addExpense({
    description: "gas bill",
    amount: 11,
    note: "gas",
    createdAt: 1,
  }),
);
store.dispatch(
  addExpense({
    description: "rent",
    amount: 121,
    note: "ny",
    createdAt: 11,
  }),
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

// createRoot(document.getElementById("app")).render(jsx);
