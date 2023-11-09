import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";

const Write = () => {
  const { state } = useLocation();

  const navigate = useNavigate();

  const [title, setTitle] = useState(state?.title || "");
  const [value, setValue] = useState(state?.content || "");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch("http://localhost:8080/api/v1/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await uploadImage();

    if (!title.trim()) {
      setErrors((prevError) => ({
        ...prevError,
        "title": "Please enter a valid title",
      }));
    }
    if (!value.trim()) {
      setErrors((prevError) => ({
        ...prevError,
        "value": "Content cannot be empty",
      }));
    }
    if (!title.trim() || !value.trim()) {
      return;
    }

    try {
      let response;
      state
        ? (response = await fetch(
            `http://localhost:8080/api/v1/posts/${state.id}`,
            {
              method: "PUT",
              headers: {
                "Content-type": "application/JSON",
              },
              body: JSON.stringify({
                title,
                content: value,
                img: file ? imgUrl : "",
              }),
            }
          ))
        : (response = await fetch("http://localhost:8080/api/v1/posts", {
            method: "POST",
            headers: {
              "Content-type": "application/JSON",
            },
            body: JSON.stringify({
              title,
              content: value,
              img: file ? imgUrl : "",
            }),
          }));

      if (response.ok) {
        const {
          data: { post },
        } = await response.json();
        navigate("/");
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="createPost">
      <form className="form">
        {errors.title && <div className="errors">{errors.title}</div>}
        <label htmlFor="titleInput">Post Title:</label>
        <input
          name="title"
          id="titleInput"
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setErrors({});
          }}
          required
        />

        <div className="fileUpload">
          <label htmlFor="file">Upload Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        {errors.value && <div className="errors">{errors.value}</div>}
        <div className="textareaContainer">
          <ReactQuill
            className="textarea"
            name="content"
            theme="snow"
            value={value}
            onChange={setValue}
            required
          />
        </div>
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          {state ? "Update Post" : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default Write;
