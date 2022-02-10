import React from "react";
import { Link } from "react-router-dom";

import "./categoriesTile.styles.scss";

const generateRandomColor = () => {
  let r = Math.round(Math.random() * 255); //red 0 to 255
  let g = Math.round(Math.random() * 255); //green 0 to 255
  let b = Math.round(Math.random() * 255); //blue 0 to 255

  return "rgb(" + r + ", " + g + ", " + b + ")";
};

const CategoriesTile = ({ postId, postName, postAuthor, postCategory }) => {
  return (
    <div className="categoriesTile-container">
      <Link to={`/` + postCategory + `/` + postId}>
        <div
          className="categoriesTile-bg"
          style={{ backgroundColor: generateRandomColor() }}
        />
        <div className="categoriesTile-content">
          <h2>{postName}</h2>
          <span>{`Author: ` + postAuthor}</span>
        </div>
      </Link>
    </div>
  );
};

export default CategoriesTile;
