import React from "react";

function NewsItem({ item }) {
  return (
    <div className="post-item clearfix">
      <img src={item.img} alt="" />
      <h4>
        <p>{item.subtitle}</p>
      </h4>
    </div>
  );
}

export default NewsItem;
