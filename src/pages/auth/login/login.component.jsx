import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../../../components/formInput/formInput.component";
import CustomButton from "../../../components/customButton/customButton.component";
import Title from "../../../components/title/title.component";
import CustomLink from "../../../components/customLink/customLink.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../../redux/user/user.actions";

import "./login.styles.scss";

const Login = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const initialState = {
    email: "",
    password: "",
  };

  const { email, password } = userCredentials;

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setUserCredentials(initialState);

    emailSignInStart(email, password);
  };

  return (
    <>
      <Title />
      <div className="login-container">
        <div className="login-innerContainer">
          <div className="login-register">
            <h3>Don't have an account?</h3>
            <CustomLink exPad to="/register">
              <span>Register</span>
            </CustomLink>
          </div>
          <div className="login-google">
            <h3>You can sign in using Google aswell!</h3>
            <CustomButton isGoogleSignIn onClick={googleSignInStart}>
              Google Sign In
            </CustomButton>
          </div>
          <div className="login-formContainer">
            <h1>Login</h1>
            <div className="login-form">
              <form onSubmit={handleSubmit}>
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

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(Login);
