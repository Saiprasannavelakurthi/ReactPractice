import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext.jsx";

const ProtectedRoute = ({ children, allowed }) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/" replace />;
  if (allowed && !allowed.includes(user.role)) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;
