import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "is-pending" : isActive ? "is-active" : ""
      }
    >
      Dashboard
    </NavLink>
    <NavLink
      to="/create"
      className={({ isActive, isPending }) =>
        isPending ? "is-pending" : isActive ? "is-active" : ""
      }
    >
      Create Expense
    </NavLink>

    <NavLink
      to="/help"
      className={({ isActive, isPending }) =>
        isPending ? "is-pending" : isActive ? "is-active" : ""
      }
    >
      Help
    </NavLink>
  </header>
);
export default Header;
