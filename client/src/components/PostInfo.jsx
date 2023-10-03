import React from "react";
import { Link } from "react-router-dom";
const PostInfo = ({ post }) => {
  const { id, title, image, content, author, created_at } = post;
  return (
    <div className="post">
      <div className="imgContainer">
        <img className="img" src={image} alt="lol" />
      </div>
      <div className="postContent">
        <Link to={`posts/${id}`}>
          <h2>{title}</h2>
          <p>{content}</p>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default PostInfo;
