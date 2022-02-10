import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../../../components/formInput/formInput.component";
import CustomButton from "../../../components/customButton/customButton.component";
import Title from "../../../components/title/title.component";

import "./register.styles.scss";

const Register = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    // country: "",
    password: "",
    confirmPassword: "",
  });

  const { email, name, password, confirmPassword } = userCredentials;

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <>
      <Title />
      <div className="register-container">
        <div className="register-innerContainer">
          <div className="register-register">
            <h3>Already have an account?</h3>
            <Link to="/login">
              <span>Login</span>
            </Link>
          </div>
          <div className="register-formContainer">
            <h1>Register</h1>
            <div className="register-form">
              <form>
                <FormInput
                  name="name"
                  type="text"
                  value={name}
                  handleChange={handleChange}
                  label="Name"
                  required
                />
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
                <FormInput
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  handleChange={handleChange}
                  label="Confirm password"
                  required
                />
                <div className="register-button">
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

export default Register;
