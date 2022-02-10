import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../../../components/formInput/formInput.component";
import CustomButton from "../../../components/customButton/customButton.component";
import Title from "../../../components/title/title.component";

import "./login.styles.scss";

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <>
      <Title />
      <div className="login-container">
        <div className="login-innerContainer">
          <div className="login-register">
            <h3>Don't have an account?</h3>
            <Link to="/register">
              <span>Register</span>
            </Link>
          </div>
          <div className="login-google">
            <h3>You can sign in using Google aswell!</h3>
            <CustomButton isGoogleSignIn>Google Sign In</CustomButton>
          </div>
          <div className="login-formContainer">
            <h1>Login</h1>
            <div className="login-form">
              <form>
                <FormInput
                  name="email"
                  type="email"
                  value={email}
                  handleChange={handleChange}
                  label="E-mail"
                  required
                />
                <FormInput
                  name="password"
                  type="password"
                  value={password}
                  handleChange={handleChange}
                  label="Password"
                  required
                />
                <div className="login-button">
                  <CustomButton type="submit">Submit</CustomButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
