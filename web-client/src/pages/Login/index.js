import React, { useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import LoginForm from "../../components/LoginForm";
import { login } from "../../redux/actions/login";

import LoginBackground from "../../images/login-background.svg";

function Login() {
  const initialState = { email: "", password: "" };
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const { error } = useSelector((state) => state.login);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="flex-row">
      <div id="loginImage">
        <img src={LoginBackground} />
      </div>
      <div className="loginSide">
        <p className="playfairDisplay weightBold font48 color00">Login</p>
        <form onSubmit={handleLogin}>
          <LoginForm
            name="email"
            placeholder="Email"
            type="email"
            className="loginBackground mt-5"
            handleChange={handleChange}
          />
          <LoginForm
            name="password"
            placeholder="Password"
            type="password"
            className="loginBackground mt-4"
            handleChange={handleChange}
          />
          <button
            type="submit"
            className="loginButton nunito weight900 font24 color39 mb-3"
          >
            Login
          </button>
        </form>
        {/* {error && <p>{error}</p>} */}
        <Link to="/login" className="mulish weightBold font18 color39">
          Forgot password?
        </Link>
      </div>
    </div>
  );
}

export default Login;
