import React from "react";
import { startLogin } from "../actions/auth";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    dispatch(startLogin());
  };
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h2>Expensify App</h2>
        <p>It's time to get your expenses under control</p>
        <button onClick={handleLoginClick} className="button">
          Login by Google
        </button>
      </div>
    </div>
  );
}
