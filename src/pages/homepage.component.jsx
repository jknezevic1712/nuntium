import React from "react";

import Banner from "../components/banner/banner.component";
import Tile from "../components/tile/tile.component";

import { categories } from "../assets/dummyObjects";

import "./homepage.styles.scss";

const Homepage = () => {
  const categoriesList = categories.map((category) => {
    return (
      <Tile
        key={category.id}
        categoryId={category.id}
        categoryName={category.name}
        categoryImage={category.image}
      />
    );
  });

  return (
    <div className="homepage-container">
      <div className="homepage-title">
        <h1>Nuntium - best blog site</h1>
      </div>
      <div className="homepage-banner">
        <Banner />
      </div>
      <div className="homepage-tiles">
        {/* <Tile key={i} categoryId={category.id} categoryName={category.name} /> */}
        {categoriesList}
      </div>
      {/* <button onClick={categoriesList}>Click</button> */}
    </div>
  );
};

export default Homepage;
