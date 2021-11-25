import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collenction-item.component";
const Preview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((cur, i) => i < 4)
          .map(({ id, ...props }) => {
            return <CollectionItem key={id} {...props} />;
          })}
      </div>
    </div>
  );
};

export default Preview;
