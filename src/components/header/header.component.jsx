import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import "./header.styles.scss";

const Header = ({ currentUser, signOutStart }) => {
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

          {currentUser ? (
            <div className="header-groupedLinks">
              <Link to="/profile">
                <span>Profile</span>
              </Link>
              <Link to="/" onClick={signOutStart}>
                <span>Sign out</span>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
