import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import profileReducer from "./profile/profile.reducer";
import blogsCollectionReducer from "./blogs-collection/blogs-collection.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  blogsCollection: blogsCollectionReducer,
});

export default rootReducer;
