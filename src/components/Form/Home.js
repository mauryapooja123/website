import React from "react";
import { useEffect } from "react";

import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const removeToken = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/register");
  };

  return (
    <>
      <p> Home</p>

      <button type="submit" onClick={removeToken}>
        Logout
      </button>
      <button type="submit" onClick={handleClick}>
        Register
      </button>
    </>
  );
}
export default Home;
