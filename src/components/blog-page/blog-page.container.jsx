import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import BlogPage from "./blog-page.component";

import { selectBlogDetails } from "../../redux/blogs-collection/blogs-collection.selectors";

const BlogPageContainer = () => {
  const { urlID } = useParams();

  const blogDetails = useSelector(selectBlogDetails(urlID));

  return <BlogPage blogDetails={blogDetails} />;
};

export default BlogPageContainer;
