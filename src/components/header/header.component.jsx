import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import CustomLink from "../customLink/customLink.component";

import "./header.styles.scss";

const Header = ({ currentUser, signOutStart }) => {
  return (
    <div className="header-container">
      <div className="header-innerContainer">
        <div className="header-links">
          <CustomLink headerPad to="/contact">
            <span>Contact</span>
          </CustomLink>

          {currentUser ? (
            <>
              <CustomLink headerPad to="/" headerMG>
                <span>Home</span>
              </CustomLink>
              <div className="header-groupedLinks">
                <CustomLink headerPad to="/profile">
                  <span>Profile</span>
                </CustomLink>
                <CustomLink headerPad to="/" onClick={signOutStart}>
                  <span>Sign out</span>
                </CustomLink>
              </div>
            </>
          ) : (
            <>
              <CustomLink headerPad to="/">
                <span>Home</span>
              </CustomLink>
              <CustomLink headerPad to="/login">
                <span>Login</span>
              </CustomLink>
            </>
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
