import React from "react";
import { Link } from "react-router-dom";

import "./blogsCollectionTile.styles.scss";

const generateRandomColor = () => {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);

  return "rgb(" + r + ", " + g + ", " + b + ")";
};

const BlogsCollectionTile = ({ blogId, blogTitle, blogAuthor }) => {
  return (
    <div className="blogsCollectionTile-container">
      <Link to={`/blogs/` + blogId}>
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
