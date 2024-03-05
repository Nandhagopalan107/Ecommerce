import React from "react";
import "./CSS/LoginSignup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";
const LoginSignup = () => {
  const navigate = useNavigate();
  const { username,email,password,setUsername,setPassword,setEmail, login } = useContext(ShopContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/register", {
        email:email,
        pwd:password,
        fname:username
  });

      console.log(response.data.message);
      login();
      alert('registered successfully')
      navigate('/');
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input
            type="text"
            placeholder="Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        <button onClick={handleRegister}>Continue</button>
        <p className="loginsignup-login">
          Already have an account1{" "}
          <Link to="/login">
            {" "}
            <span>Login here</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
