import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();

  const upload = async () => {
    try {
      const formData = new FormData();
    } catch (error) {
      console.error(error);
    }
  };

  const [singlePost, setSinglePost] = useState();
  const getSinglePost = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/posts/${id}`);

      if (response.ok) {
        const {
          data: { post },
        } = await response.json();
        setSinglePost(post[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log(singlePost);
  useEffect(() => {
    getSinglePost();
  }, []);
  return (
    singlePost && (
      <div className="singlePost">
        <div className="imgContainer">
          <img className="img"></img>
        </div>

        <div className="authorInfo">
          <h3>{singlePost.author}</h3>
          <div>
            <Link to="/write" state={singlePost}>
              Edit
            </Link>
            <button>Delete</button>
          </div>
        </div>
        <div>{singlePost.title}</div>
        <div>{singlePost.content}</div>
      </div>
    )
  );
};

export default SinglePost;
