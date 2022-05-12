import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";

import PrivateRoute from "./Routes/PrivateRoute";
import Home from "./components/Form/Home";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import Registration from "./components/pages/Registration";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     return <Navigate to="/" />;
  //   } else {
  //     return <Navigate to="/login" />;
  //   }
  // });
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedRoutes>
              <Login />
            </ProtectedRoutes>
          }
        />
        <Route
          //token={true}
          path="/register"
          element={
            <ProtectedRoutes>
              <Registration />
            </ProtectedRoutes>
          }
        />
        {/* <Route path="/reg" element={<Registration />} /> */}

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
