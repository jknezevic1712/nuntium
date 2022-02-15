import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import FormInput from "../../../components/formInput/formInput.component";
import CustomButton from "../../../components/customButton/customButton.component";
import Title from "../../../components/title/title.component";

import { signUpStart } from "../../../redux/user/user.actions";

import "./register.styles.scss";

const Register = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const initialState = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { email, displayName, password, confirmPassword } = userCredentials;

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    } else if (password.length < 6) {
      alert("Password needs to be atleast 6 characters long!");
      return;
    }

    setUserCredentials(initialState);

    signUpStart({ displayName, email, password });
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
              <form onSubmit={handleSubmit}>
                <FormInput
                  name="displayName"
                  type="text"
                  value={displayName}
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

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(Register);
