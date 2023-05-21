import React from "react";
import { Link } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { useDispatch } from "react-redux";
import { history } from "../routers/AppRouter";

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
    localStorage.removeItem("accessToken");
    history.push("/");
    window.location.reload();
  };
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link
            className="header__title"
            to="/dashboard"
            // className={({ isActive, isPending }) =>
            //   isPending ? "is-pending" : isActive ? "is-active" : ""
            // }
          >
            <h1>Expensify</h1>
            {/* Dashboard */}
          </Link>
          {/* <Link
        to="/create"
        className={({ isActive, isPending }) =>
        isPending ? "is-pending" : isActive ? "is-active" : ""
      }
      >
      Create Expense
    </Link> */}

          <button className="button button__link" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
