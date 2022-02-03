import React from "react";

import "./banner.styles.scss";

const Banner = () => {
  return (
    <div className="banner-container">
      {/* <h2>This is banner!</h2> */}
      <div
        className="banner-image"
        style={{
          backgroundImage: `url(https://image.freepik.com/free-photo/woman-working-from-home-during-coronavirus-quarantine_53876-148002.jpg)`,
        }}
      />
    </div>
  );
};

export default Banner;
