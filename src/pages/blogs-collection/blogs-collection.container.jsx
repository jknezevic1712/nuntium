import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import BlogsCollection from "./blogs-collection.component";

import { fetchCollectionsStartAsync } from "../../redux/blogs-collection/blogs-collection.actions";

import { selectCollectionsForView } from "../../redux/blogs-collection/blogs-collection.selectors";
import { selectCollectionDetails } from "../../redux/blogs-collection/blogs-collection.selectors";

const BlogsCollectionContainer = ({
  fetchCollectionsStartAsync,
  match,
  blogs,
  blogsDetails,
}) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <BlogsCollection match={match} blogs={blogs} blogsDetails={blogsDetails} />
  );
};

const mapStateToProps = createStructuredSelector({
  blogs: selectCollectionsForView,
  blogsDetails: selectCollectionDetails,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogsCollectionContainer);
