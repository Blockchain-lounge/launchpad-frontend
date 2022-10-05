import React from "react";
import "./tag-style.scss";

const Tag = ({ icon, tag }) => {
  return (
    <div className="tag">
      <span>
        {icon}
        {tag}
      </span>
    </div>
  );
};

export default Tag;
