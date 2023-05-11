import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage.js";
import AddExpensePage from "../components/AddExpensePage.js";
import EditExpensePage from "../components/EditExpensePage.js";
import HelpPage from "../components/HelpPage.js";
import NotFoundPage from "../components/NotFoundPage.js";
import Header from "../components/Header.js";
import Sumary from "../components/Sumary.js";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Sumary />
      <Routes>
        <Route path="/" element={<ExpenseDashboardPage />} />
        <Route path="/create" element={<AddExpensePage />} />
        <Route path="/edit/:id" element={<EditExpensePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRouter;
