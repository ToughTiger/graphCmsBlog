import React, { useState, useEffect } from "react";
import { getCategories } from "../services";
import Link from "next/link";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="w-full px-8 py-4 bg-white rounded">
      <h1 className="font-semibold text-2xl border-b border-blue-400 mb-4">
        Categories
      </h1>
      <div className="p-2">
        {categories.map((category, index) => (
          <Link href={`/category/${category.slug}`} key={index}>
            <p className="cursor-pointer mb-2 font-light text-gray-600">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
