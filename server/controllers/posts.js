import db from "../db/db-connection.js";

export const getPosts = async (req, res) => {
  try {
    const { rows: posts } = await db.query(
      "SELECT * FROM posts ORDER BY created_at DESC"
    );
    res.status(200).json({
      status: "success",
      results: posts.length,
      data: { posts },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;

    const { rows: post } = await db.query("SELECT * FROM posts WHERE id=$1", [
      id,
    ]);
    res.status(200).json({
      status: "success",
      data: { post },
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, content, img } = req.body;

    const { rows: post } = await db.query(
      "INSERT INTO posts (title, content, img) VALUES ($1, $2, $3) RETURNING *",
      [title, content, img]
    );
    res.status(200).json({
      status: "success",
      data: { post },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

export const editPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, img } = req.body;

    const { rows: post } = await db.query(
      "UPDATE posts SET (title, content, img) = ($1, $2, $3) WHERE id = $4 RETURNING *",
      [title, content, img, id]
    );
    res.status(200).json({
      status: "success",
      data: { post },
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await db.query("DELETE FROM posts WHERE id = $1", [id]);
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
