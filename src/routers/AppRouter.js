import React from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage.js";
import AddExpensePage from "../components/AddExpensePage.js";
import EditExpensePage from "../components/EditExpensePage.js";
import HelpPage from "../components/HelpPage.js";
import NotFoundPage from "../components/NotFoundPage.js";
import Header from "../components/Header.js";
import LoginPage from "../components/LoginPage.js";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<ExpenseDashboardPage />} />
        <Route path="/create" element={<AddExpensePage />} />
        <Route path="/edit/:id" element={<EditExpensePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </Router>
);

export default AppRouter;
