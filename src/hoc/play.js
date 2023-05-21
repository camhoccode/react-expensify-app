import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        navigate("/");
      }
    }, []);
    return <WrappedComponent {...props} />;
  };
  return WithAuth;
};
