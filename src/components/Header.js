import React from "react";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink
        to="/dashboard"
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
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
};
export default Header;
