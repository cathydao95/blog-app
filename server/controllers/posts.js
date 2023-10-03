import db from "../db/db-connection.js";

export const getAllPosts = async (req, res) => {
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

export const getSinglePost = async (req, res) => {
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
    const { title, content, author } = req.body;

    const { rows: newPost } = await db.query(
      "INSERT INTO posts (title, content, author) VALUES ($1, $2, $3) RETURNING *",
      [title, content, author]
    );
    res.status(200).json({
      status: "success",
      data: { newPost },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

export const editPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, author } = req.body;

    const { rows: updatedPost } = await db.query(
      "UPDATE posts SET (title, content, author) = ($1, $2, $3) WHERE id = $4 RETURNING *",
      [title, content, author, id]
    );
    res.status(200).json({
      status: "success",
      data: { updatedPost },
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
