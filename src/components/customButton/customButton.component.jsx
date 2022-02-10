import React from "react";

import "./customButton.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } customButton`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
