import express, { urlencoded } from "express";
import cors from "cors";
import path from "path";
import "dotenv/config";
import db from "./db/db-connection.js";
import postRoute from "./routes/posts.js";
import multer from "multer";

const app = express();
const PORT = 8080;

// Configuring cors middleware
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const upload = multer({ dest: "uploads/" });
app.post("/upload", upload.single("file"), (req, res, next) => {
  res.status(200).json("Image has been uploaded");
});

// routes
app.use("/api/v1/posts", postRoute);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.listen(PORT, () =>
  console.log(`Server running on Port http://localhost:${PORT}`)
);
