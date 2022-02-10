import React from "react";

import Banner from "../../components/banner/banner.component";
import HomepageTile from "../../components/homepageTile/homepageTile.component";
import Title from "../../components/title/title.component";

import { categories } from "../../assets/dummyObjects";

import "./homepage.styles.scss";

const Homepage = () => {
  const categoriesList = categories.map((category) => {
    return (
      <HomepageTile
        key={category.id}
        categoryId={category.id}
        categoryName={category.name}
        categoryImage={category.image}
      />
    );
  });

  return (
    <div className="homepage-container">
      <Title />
      <div className="homepage-banner">
        <Banner />
      </div>
      <div className="homepage-tiles">{categoriesList}</div>
    </div>
  );
};

export default Homepage;
