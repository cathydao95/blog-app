import React, { useState, useEffect } from "react";
import PostInfo from "../components/PostInfo";

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/posts");
      const {
        data: { posts },
      } = await response.json();
      console.log(posts);
      setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <h1>lol</h1>
      <div className="postsContainer">
        {posts.map((post) => (
          <PostInfo key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
