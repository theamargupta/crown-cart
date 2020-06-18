/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './prev-coll-style.scss';
import CollItem from "../coll-item/coll-item-comp";

const PrevColl = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({id, ...otherItemProps}) => (
          <CollItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);
export default PrevColl;
