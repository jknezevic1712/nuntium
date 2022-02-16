import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./homepage.styles.scss";

import Banner from "../../components/banner/banner.component";
import Title from "../../components/title/title.component";
import BlogsCollection from "../blogs-collection/blogs-collection.component";

import { fetchCollectionsStartAsync } from "../../redux/blogs-collection/blogs-collection.actions";

import { selectCollectionsForView } from "../../redux/blogs-collection/blogs-collection.selectors";
import { selectCollectionDetails } from "../../redux/blogs-collection/blogs-collection.selectors";

const Homepage = ({
  fetchCollectionsStartAsync,
  match,
  blogs,
  blogsDetails,
}) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div className="homepage-container">
      <Title />
      <div className="homepage-banner">
        <Banner />
      </div>
      <div className="homepage-tiles">
        <BlogsCollection
          match={match}
          blogs={blogs}
          blogsDetails={blogsDetails}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  blogs: selectCollectionsForView,
  blogsDetails: selectCollectionDetails,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
