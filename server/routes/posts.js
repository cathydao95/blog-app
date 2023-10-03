import { Router } from "express";
import {
  createPost,
  deletePost,
  editPost,
  getAllPosts,
  getSinglePost,
} from "../controllers/posts.js";

const router = Router();

router.route("/").get(getAllPosts).post(createPost);
router.route("/:id").get(getSinglePost).put(editPost).delete(deletePost);

export default router;
