import React from "react";
import { useEffect } from "react";
import { Route, Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const token = localStorage.getItem("token");

  return token ? <Navigate to="/" /> : children;
}

export default ProtectedRoutes;
