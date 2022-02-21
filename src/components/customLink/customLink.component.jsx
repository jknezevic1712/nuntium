import React from "react";
import { Link } from "react-router-dom";

import "./customLink.styles.scss";

const CustomLink = ({ to, exPad, headerPad, headerMG, children, onClick }) => (
  <Link
    className={`customLink ${exPad ? "exPad" : ""} ${
      headerPad ? "headerPad" : ""
    } ${headerMG ? "headerMG" : ""}`}
    to={to}
    $
    {...({ onClick } ? (onClick = { onClick }) : "")}
  >
    {children}
  </Link>
);

export default CustomLink;
