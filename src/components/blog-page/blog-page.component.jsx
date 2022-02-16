import React from "react";

import "./blog-page.styles.scss";

const BlogPage = ({ blogId, blogTitle, blogContent, blogAuthor }) => {
  return (
    <div className="blogPage-container">
      <div className="blogPage-title">
        <h2>{blogTitle}</h2>
      </div>
      <div className="blogPage-content">
        <p>{blogContent}</p>
      </div>
    </div>
  );
};

export default BlogPage;
