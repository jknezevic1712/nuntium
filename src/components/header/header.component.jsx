import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-innerContainer">
        <div className="header-links">
          <Link to="/contact">
            <span>Contact</span>
          </Link>
          <Link to="/">
            <span>Home</span>
          </Link>

          {/* {currentUser ? (
            <div className="header-groupedLinks">
              <Link to="/profile">
                <span>Profile</span>
              </Link>
              <Link onClick={signOutStart}>
                <span>Sign out</span>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <span>Login</span>
            </Link>
          )} */}
          <div className="header-groupedLinks">
            <Link to="/profile">
              <span>Profile</span>
            </Link>
            <Link to="/login">
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
