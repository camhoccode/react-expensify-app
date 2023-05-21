import React from "react";
import { createRoot } from "react-dom/client";
const ReactDOM = require("react-dom/client");
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { startSetExpenses } from "./actions/expenses";
import AppRouter, { history } from "./routers/AppRouter";
import configStore from "./store/configstore";
import db, { auth } from "./firebase/firebaseSetting";
import { onAuthStateChanged } from "firebase/auth";

export const store = configStore();

const root = createRoot(document.getElementById("app"));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(startSetExpenses()).then(() => {
      createRoot(document.getElementById("app")).render(jsx);
      //   root.render(jsx);
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
    console.log("log in");
  } else {
    createRoot(document.getElementById("app")).render(jsx);
    // root.render(jsx);
    history.push("/");
    console.log("Log out");
  }
});
