import { Navigate } from "react-router-dom";
import { Path } from "../config/Path.ts";
import React from "react";

interface Props {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props) => {
  const isAuthenticated = !!localStorage.getItem('token');

  return isAuthenticated ? children : <Navigate to={Path.login} />;
};

export default ProtectedRoute;

