import React from "react";
import { Link } from "react-router-dom";

import "./homepageTile.styles.scss";

const HomepageTile = ({ categoryId, categoryName, categoryImage }) => {
  return (
    <div className="homepageTile-container">
      <Link to={`/categories/` + categoryName}>
        <div
          className="homepageTile-image"
          style={{ backgroundImage: `url(${categoryImage})` }}
        />
        <div className="homepageTile-content">
          <h2>{categoryName.toUpperCase()}</h2>
        </div>
      </Link>
    </div>
  );
};

export default HomepageTile;
