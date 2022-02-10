import React from "react";
import { useParams } from "react-router-dom";

import CategoriesTile from "../../components/categoriesTile/categoriesTile.component";
import Title from "../../components/title/title.component";
import Banner from "../../components/banner/banner.component";

import { posts } from "../../assets/dummyObjects";

import "./categories.styles.scss";

const Categories = () => {
  const { urlID } = useParams();

  const postsList = posts
    .filter((post) => post.category == urlID)
    .map((filteredPosts) => {
      return (
        <CategoriesTile
          key={filteredPosts.id}
          postId={filteredPosts.id}
          postName={filteredPosts.name}
          postAuthor={filteredPosts.author}
          postCategory={filteredPosts.category}
        />
      );
    });

  return (
    <div className="categories-container">
      <Title />
      <div className="categories-banner">
        <Banner />
      </div>
      <div className="categories-tiles">{postsList}</div>
    </div>
  );
};

export default Categories;
