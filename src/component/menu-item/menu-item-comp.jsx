import React from "react";

import "./meny-item-style.scss";

const MenuItem = ({ title, imageUrl }) => (
  <div className="menu-item">
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <div className="title">{title.toUpperCase()}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
export default MenuItem;
