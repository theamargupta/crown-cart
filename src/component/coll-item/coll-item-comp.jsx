import React from 'react';
import './coll-item-style.scss';

const CollItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{`₹${price*75}`}</span>
    </div>
  </div> 
);
export default CollItem;
