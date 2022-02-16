import React from "react";
import { Link } from "react-router-dom";

import BlogPage from "../blog-page/blog-page.component";

import "./blogsCollectionTile.styles.scss";

const generateRandomColor = () => {
  let r = Math.round(Math.random() * 255); //red 0 to 255
  let g = Math.round(Math.random() * 255); //green 0 to 255
  let b = Math.round(Math.random() * 255); //blue 0 to 255

  return "rgb(" + r + ", " + g + ", " + b + ")";
};

const BlogsCollectionTile = ({
  blogId,
  blogTitle,
  blogContent,
  blogAuthor,
}) => {
  return (
    <div className="blogsCollectionTile-container">
      <Link
        to={`/blogs/` + blogId}
        component={
          <BlogPage
            blogId={blogId}
            blogTitle={blogTitle}
            blogContent={blogContent}
            blogAuthor={blogAuthor}
          />
        }
      >
        <div
          className="blogsCollectionTile-bg"
          style={{ backgroundColor: generateRandomColor() }}
        />
        <div className="blogsCollectionTile-content">
          <h2>{blogTitle}</h2>
          <span>{`Author: ` + blogAuthor}</span>
        </div>
      </Link>
    </div>
  );
};

export default BlogsCollectionTile;
