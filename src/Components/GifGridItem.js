import React from "react";
import "../index.css";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInRight">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};
