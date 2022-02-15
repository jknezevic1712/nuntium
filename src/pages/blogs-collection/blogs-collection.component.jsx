import React from "react";
import { useParams } from "react-router-dom";

import BlogsCollectionTile from "../../components/blogsCollectionTile/blogsCollectionTile.component";
import Title from "../../components/title/title.component";
import Banner from "../../components/banner/banner.component";

import { posts } from "../../assets/dummyObjects";

import "./blogs-collection.styles.scss";

const BlogsCollection = () => {
  const { urlID } = useParams();

  const postsList = posts
    .filter((post) => post.category === urlID)
    .map((filteredPosts) => {
      return (
        <BlogsCollectionTile
          key={filteredPosts.id}
          postId={filteredPosts.id}
          postName={filteredPosts.name}
          postAuthor={filteredPosts.author}
          postCategory={filteredPosts.category}
        />
      );
    });

  return (
    <div className="blogsCollection-container">
      <Title />
      <div className="blogsCollection-banner">
        <Banner />
      </div>
      <div className="blogsCollection-tiles">{postsList}</div>
    </div>
  );
};

export default BlogsCollection;
