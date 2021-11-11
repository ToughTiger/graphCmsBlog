import React, { useState, useEffect } from "react";
import { getCategories } from "../services";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
    .then((newCategories) => setCategories(newCategories));
  }, []);
  console.log(categories)
  return (
    <div className="w-full px-8 py-4 bg-white rounded">
      <h1 className="font-semibold text-2xl border-b-2 border-blue-400 mb-4">
        Categories
      </h1>
      <div>
        {
          categories.map((category, index) =>(
            <p key={index}>{category.name}</p>
          ))
        }
      </div>
    </div>
  );
};

export default Categories;
