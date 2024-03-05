import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/Login.css";
import axios from "axios";
const Login = () => {
  const { email,password,setEmail,setPassword, login } = useContext(ShopContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      console.log(response.data.message);
      login();
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input
            type="email"
            value={email}
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        <p className="loginsignup-login">
          don't have an account1{" "}
          <Link to="/signup">
            {" "}
            <span>SignUp here</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
