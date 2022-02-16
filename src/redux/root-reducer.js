import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import blogsCollectionReducer from "./blogs-collection/blogs-collection.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "blogsCollection"],
};

const rootReducer = combineReducers({
  user: userReducer,
  blogsCollection: blogsCollectionReducer,
});

export default persistReducer(persistConfig, rootReducer);
