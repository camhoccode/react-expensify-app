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
// import "./playground/promises";
import { onAuthStateChanged } from "firebase/auth";

export const store = configStore();

// const root = createRoot(document.getElementById("app"));
const root = ReactDOM.createRoot(document.getElementById("app"));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     root.render(jsx);
//     hasRendered = true;
//     console.log("rendering app");
//   }
// };

// root.render(<p>Loading ...</p>);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // console.log("uid", user.uid);
    store.dispatch(startSetExpenses()).then(() => {
      // createRoot(document.getElementById("app")).render(jsx);
      root.render(jsx);
      // renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
    console.log("log in");
  } else {
    // createRoot(document.getElementById("app")).render(jsx);
    root.render(jsx);
    // renderApp();
    history.push("/");
    console.log("Log out");
  }
});
