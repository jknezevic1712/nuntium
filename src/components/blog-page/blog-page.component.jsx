import React from "react";

import Title from "../title/title.component";

import "./blog-page.styles.scss";

const BlogPage = ({ blogDetails }) => {
  const { id, title, paragraph1, paragraph2, paragraph3, author } = blogDetails;

  return (
    <div className="blogPage-container">
      <Title />
      <div className="blogPage-innerContainer">
        <div className="blogPage-bg" />
        <div className="blogPage-content">
          <div className="blogPage-title">
            {<h2>{title}</h2>}
            <span>{author}</span>
          </div>
          <div className="blogPage-paragraphs">
            <div className="blogPage-paragraph1">{<p>{paragraph1}</p>}</div>
            <div className="blogPage-paragraph2">{<p>{paragraph2}</p>}</div>
            <div className="blogPage-paragraph3">{<p>{paragraph3}</p>}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
