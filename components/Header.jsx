import React, { useContext } from "react";
import Link from "next/link";

const categories = [
  { name: "National", slug: "national" },
  { name: "Politics", slug: "politics" },
  { name: "Business", slug: "business" },
  { name: "World", slug: "world" },
  { name: "Sports", slug: "sports" },
  { name: "Interview", slug: "interview" },
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="float-left block">
          <Link href="/">
            <span className="curser-pointer font-bold text-4xl text-white">
              North Mirror
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
