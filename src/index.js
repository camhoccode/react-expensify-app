import React from "react";
const ReactDOM = require("react-dom/client");
import { Provider } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { startSetExpenses } from "./actions/expenses";
import AppRouter, { history } from "./routers/AppRouter";
import configStore from "./store/configstore";
import db, { auth } from "./firebase/firebaseSetting";
import { login, logout } from "./actions/auth";
import LoadingPage from "./components/LoadingPage";
// import "./playground/promises";

export const store = configStore();

const root = ReactDOM.createRoot(document.getElementById("app"));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

root.render(<LoadingPage />);

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      root.render(jsx);
      if (history.location.pathname === "/") {
        history.push("/dashboard");
        window.location.reload();
      }
    });
    console.log("log in");
  } else {
    store.dispatch(logout());
    root.render(jsx);
  }
});
