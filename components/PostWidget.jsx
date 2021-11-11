import React, { useState, useEffect } from "react";
import moment from "moment";
import link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
        .catch((err) => console.log(err));
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
        .catch((err) => console.log(err.message));
    }
  }, [slug]);
  // console.log(relatedPosts);
  return (
    <div className="w-full px-4 py-4 bg-white mb-8 rounded">
      <h1 className="text-2xl font-semibold mb-4 border-b-2 border-blue-400">Top Stories</h1>
      {relatedPosts.map((post) => (
        <div className="flex" key={post.title}>
          <div className="flex justify-center items-center">
            <img className="h-10 w-10 rounded-full" src={post.featuredImage.url} alt={post.title} />
            <div className="w-full px-2 py-2">{post.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
