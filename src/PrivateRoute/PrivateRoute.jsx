// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <h1 className="text-purple-500 text-4xl font-semibold text-center mt-10">
        Loading ...
      </h1>
    );
  }

  if (user) {
    return children;
  }
  return (
    <Navigate to={"/login"} state={{ from: location.pathname }}></Navigate>
  );
};

export default PrivateRoute;
