import React, { useState } from "react";

import Title from "../../components/title/title.component";
import FormInput from "../../components/formInput/formInput.component";
import CustomButton from "../../components/customButton/customButton.component";

import "./profile.styles.scss";

const Profile = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: "Jakov Knežević",
    email: "knezevic.jakov@gmail.com",
    // country: "",
    password: "12345",
    confirmPassword: "",
  });

  const { email, name, password, confirmPassword } = userCredentials;

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="profile-container">
      <Title />
      <div className="profile-formContainer">
        <h1>Profile</h1>
        <div className="profile-form">
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
            <div className="profile-button">
              <CustomButton type="submit">Update</CustomButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
