import express, { urlencoded } from "express";
import cors from "cors";
import path from "path";
import "dotenv/config";
import db from "./db/db-connection.js";

const app = express();
const PORT = 8080;

// Configuring cors middleware
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//
app.get("/", (req, res) => {
  res.json("Hello ");
});

app.get("/api/v1/posts", async (req, res) => {
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
});

app.get("/api/v1/posts/:id", async (req, res) => {
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
});

// CREATE CONTACT
app.post("/api/v1/posts", async (req, res) => {
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
});

app.put("/api/v1/posts/:id", async (req, res) => {
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
});

app.delete("/api/v1/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await db.query("DELETE FROM posts WHERE id = $1", [id]);
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.listen(PORT, () =>
  console.log(`Server running on Port http://localhost:${PORT}`)
);
