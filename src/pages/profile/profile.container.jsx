import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Profile from "./profile.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";

const ProfileContainer = ({ currentUser }) => {
  return <Profile currentUser={currentUser} />;
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(ProfileContainer);
