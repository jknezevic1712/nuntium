import React from "react";

import BlogsCollectionTile from "../../components/blogsCollectionTile/blogsCollectionTile.component";

import "./blogs-collection.styles.scss";

const BlogsCollection = ({ blogs }) => {
  const blogsList = blogs.map((blogs) => {
    return (
      <BlogsCollectionTile
        key={blogs.id}
        blogId={blogs.id}
        blogTitle={blogs.title}
        blogAuthor={blogs.author}
      />
    );
  });

  return (
    <div className="blogsCollection-container">
      <div className="blogsCollection-tiles">{blogsList}</div>
    </div>
  );
};

export default BlogsCollection;
