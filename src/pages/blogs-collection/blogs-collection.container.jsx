import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import BlogsCollection from "./blogs-collection.component";

import { fetchCollectionsStartAsync } from "../../redux/blogs-collection/blogs-collection.actions";

import { selectCollectionsForView } from "../../redux/blogs-collection/blogs-collection.selectors";

const BlogsCollectionContainer = ({
  fetchCollectionsStartAsync,
  match,
  blogs,
}) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return <BlogsCollection match={match} blogs={blogs} />;
};

const mapStateToProps = createStructuredSelector({
  blogs: selectCollectionsForView,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogsCollectionContainer);
