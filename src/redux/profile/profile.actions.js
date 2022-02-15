import ProfileActionTypes from "./profile.types";

import { updateProfileData } from "../../firebase/firebase.utils";

export const profileUpdateStart = () => ({
  type: ProfileActionTypes.PROFILE_UPDATE_START,
});

export const profileUpdateStartAsync = (userId, profileData) => {
  return (dispatch) => {
    dispatch(profileUpdateStart());

    updateProfileData(userId, profileData)
      .then(() => {
        dispatch(profileUpdateSuccess(userId, profileData));
        console.log("Profile updated!");
      })
      .catch((error) => {
        dispatch(profileUpdateFailure(error.message));
        console.log("Profile not updated!");
      });
  };
};

export const profileUpdateSuccess = (userId, profileData) => ({
  type: ProfileActionTypes.PROFILE_UPDATE_SUCCESS,
  payload: { userId, profileData },
});

export const profileUpdateFailure = (error) => ({
  type: ProfileActionTypes.PROFILE_UPDATE_FAILURE,
  payload: error,
});
