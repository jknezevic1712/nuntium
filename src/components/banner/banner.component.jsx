import React from "react";

import "./banner.styles.scss";

const Banner = () => {
  return (
    <div className="banner-container">
      {/* <h2>This is banner!</h2> */}
      <div
        className="banner-image"
        style={{
          backgroundImage: `url(https://francis.ventures/wp-content/uploads/2018/03/nest-blog-banner.jpg)`,
        }}
      />
    </div>
  );
};

export default Banner;
