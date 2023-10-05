import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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

  const deletePost = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/posts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/JSON",
        },
      });

      if (response.ok) {
        const data = await response.json();
        navigate("/");
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
        <div className="singlePostInfo">
          <div className="singleImgContainer">
            <img
              className="singleImg"
              src={`../../public/uploads/${singlePost.img}`}
            ></img>
          </div>
          <div className="btnContainer">
            <Link className="editBtn" to="/write" state={singlePost}>
              Edit
            </Link>
            <button className="deleteBtn" onClick={deletePost}>
              Delete
            </button>
          </div>
          <div className="singlePostTitle">{singlePost.title}</div>
          <div className="singlePostContent">
            {/* remove p tags from element */}
            {singlePost.content.split("<p>").map((element) => (
              <div className="paragraph">{element.slice(0, -4)}</div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default SinglePost;
