import React from "react";
import { Link } from "react-router-dom";
import { getText } from "../utils";

const PostInfo = ({ post }) => {
  const { id, title, img, content, author, created_at } = post;
  console.log(post);
  return (
    <div className="post">
      <div className="imgContainer">
        <img className="img" src={`../../public/uploads/${img}`} alt="lol" />
      </div>
      <div className="postContent">
        <Link to={`posts/${id}`}>
          <h2 className="title">{title}</h2>
          <p className="content">{`${getText(content.slice(0, 250))}...`}</p>
          <button className="readMore">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default PostInfo;
