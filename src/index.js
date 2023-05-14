import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { startSetExpenses } from "./actions/expenses";
import AppRouter from "./routers/AppRouter";
import configStore from "./store/configstore";
import "./firebase/firebaseSetting";
// import "./playground/promises";

export const store = configStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading ...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});

// ReactDOM.render(jsx, document.getElementById("app"));
// createRoot(document.getElementById("app")).render(jsx);
