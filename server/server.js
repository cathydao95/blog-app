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

// Get .png on image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/v1/upload", upload.single("file"), (req, res, next) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

// routes
app.use("/api/v1/posts", postRoute);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.listen(PORT, () =>
  console.log(`Server running on Port http://localhost:${PORT}`)
);
