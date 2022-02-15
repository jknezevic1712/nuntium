import { createSelector } from "reselect";
import { memoize } from "lodash";

const selectBlogsCollection = (state) => state.blogsCollection;

export const selectCollection = createSelector(
  [selectBlogsCollection],
  (blogsCollection) => blogsCollection.blogs
);

export const selectCollectionsForView = memoize(
  createSelector([selectCollection], (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
  )
);

export const selectCollectionDetails = memoize((urlID) =>
  createSelector([selectCollection], (collection) =>
    collection ? collection[urlID] : null
  )
);
