import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-innerContainer">
        <div className="header-links">
          <Link to="/">
            <span>First link</span>
          </Link>
          <Link to="/">
            <span>Second link</span>
          </Link>
          <Link to="/">
            <span>Third link</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
