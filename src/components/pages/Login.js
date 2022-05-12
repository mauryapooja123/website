import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const token = "93874ewjr23i4kjd9384938";
  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(user);
    localStorage.setItem("token", token);
    navigate("/");
    //console.log(user, "pppp7899");
  };

  return (
    <>
      <form action="/action_page.php" onSubmit={handleSubmit}>
        <div class="container">
          <h1>Login</h1>

          <hr />

          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleOnChange}
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="psw"
            value={user.password}
            onChange={handleOnChange}
          />

          <button type="submit" class="registerbtn">
            Login
          </button>
        </div>
      </form>
    </>
  );
}
export default Login;
