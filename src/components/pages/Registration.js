import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const token = "pq9rt873952t";
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("token", token);
    setUser(user);
    navigate("/");
    console.log(user, "ppppppppppppp");
  };

  return (
    <>
      <form action="/action_page.php" onSubmit={handleSubmit}>
        <div class="container">
          <h1>Register</h1>

          <hr />

          <label for="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            id="name"
            value={user.name}
            onChange={handleChange}
          />

          <label for="number">
            <b>Number</b>
          </label>
          <input
            type="number"
            placeholder="Enter number"
            name="number"
            id="number"
            value={user.number}
            onChange={handleChange}
          />
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
          />

          <label for="psw-">
            <b> Password</b>
          </label>
          <input
            type="password"
            placeholder=" Password"
            name="password"
            id="psw-repeat"
            value={user.password}
            onChange={handleChange}
          />

          <button type="submit" class="registerbtn">
            Register
          </button>
        </div>
      </form>
    </>
  );
}
export default Registration;
