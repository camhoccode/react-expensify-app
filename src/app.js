import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configStore from "./store/configstore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";

export const store = configStore();

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

// createRoot(document.getElementById("app")).render(jsx);
