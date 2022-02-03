import React from "react";
import { Link } from "react-router-dom";

import "./tile.styles.scss";

const Tile = ({ categoryId, categoryName, categoryImage }) => {
  console.log(categoryId, categoryName, categoryImage);

  return (
    <div className="tile-container">
      <Link to={`/` + categoryName}>
        <div
          className="tile-image"
          style={{ backgroundImage: `url(${categoryImage})` }}
        />
        <div className="tile-content">
          <h2>{categoryName.toUpperCase()}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Tile;
