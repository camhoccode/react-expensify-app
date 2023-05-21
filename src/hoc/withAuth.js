import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const withAuth = (WrapperComponent) => {
  const WithAuth = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        navigate("/");
      }
    }, []);
    return (
      <div>
        <Header />
        <WrapperComponent {...props} />;
      </div>
    );
  };
  return WithAuth;
};

export default withAuth;
