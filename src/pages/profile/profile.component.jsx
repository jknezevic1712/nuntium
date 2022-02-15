import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Title from "../../components/title/title.component";
import FormInput from "../../components/formInput/formInput.component";
import CustomButton from "../../components/customButton/customButton.component";

import { profileUpdateStartAsync } from "../../redux/profile/profile.actions";
import { checkUserSession } from "../../redux/user/user.actions";

import "./profile.styles.scss";

const Profile = ({
  currentUser,
  profileUpdateStartAsync,
  checkUserSession,
}) => {
  // const [userCredentials, setUserCredentials] = useState({
  //   displayName: "Jakov Knežević",
  //   email: "knezevic.jakov@gmail.com",
  //   password: "12345",
  //   confirmPassword: "",
  // });

  const [userCredentials, setUserCredentials] = useState({
    displayName: currentUser.displayName,
    email: currentUser.email,
    id: currentUser.id,
  });

  const { email, displayName, id } = userCredentials;

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const profileDataForUpdate = {
      email,
      displayName,
      id,
    };

    profileUpdateStartAsync(id, profileDataForUpdate);
    checkUserSession();
  };

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="profile-container">
      <Title />
      <div className="profile-formContainer">
        <h1>Profile</h1>
        <div className="profile-form">
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
            {/* <FormInput
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
            /> */}
            <div className="profile-button">
              <CustomButton type="submit">Update</CustomButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  profileUpdateStartAsync: (id, profileDataForUpdate) =>
    dispatch(profileUpdateStartAsync(id, profileDataForUpdate)),
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(null, mapDispatchToProps)(Profile);
