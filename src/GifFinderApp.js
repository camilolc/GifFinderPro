import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";
import "../src/index.css";
export const GifFinderApp = () => {
  const [categories, setCategories] = useState([]);
  return (
    <>
      <h2 className="animate__animated animate__fadeInDownBig">GifFinderPro</h2>
      <p className="animate__animated animate__slideInUp">¡Encuentra tus gifs favoritos!</p>

      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category}></GifGrid>
        ))}
      </ol>
    </>
  );
};
