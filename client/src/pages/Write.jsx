import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation } from "react-router-dom";

const Write = () => {
  const { state } = useLocation();
  const [title, setTitle] = useState(state?.title || "");
  const [value, setValue] = useState(state?.content || "");
  const [file, setFile] = useState(null);

  // const uploadImage = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     const res = await fetch("/upload", formData);
  //     return res.data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleSubmit = async () => {
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
              body: JSON.stringify({ title, value, file }),
            }
          ))
        : (response = await fetch("http://localhost:8080/api/v1/posts", {
            method: "POST",
            headers: {
              "Content-type": "application/JSON",
            },
            body: JSON.stringify(title, value, file),
          }));

      if (response.ok) {
        const {
          data: { post },
        } = await response.json();
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleInput = (e) => {
    setValue((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  console.log(value);
  return (
    <div className="createPost">
      <form className="form">
        <input
          name="title"
          className="titleInput"
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <label htmlFor="file">Upload Image</label>
          <input
            type="file"
            id="file"
            // onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="textareaContainer">
          <ReactQuill
            className="textarea"
            name="content"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </form>
    </div>
  );
};

export default Write;
