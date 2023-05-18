import React from "react";
import { startLogin } from "../actions/auth";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    dispatch(startLogin());
  };
  return (
    <div>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}
