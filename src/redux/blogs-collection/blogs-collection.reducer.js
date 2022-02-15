import BlogsCollectionActionTypes from "./blogs-collection.types";

const INITIAL_STATE = {
  blogs: null,
  isFetching: false,
  error: null,
};

const blogsCollectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BlogsCollectionActionTypes.FETCH_BLOGS_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };

    case BlogsCollectionActionTypes.FETCH_BLOGS_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        blogs: action.payload,
        error: null,
      };

    case BlogsCollectionActionTypes.FETCH_BLOGS_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default blogsCollectionReducer;
