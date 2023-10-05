import { Router } from "express";
import {
  createPost,
  deletePost,
  editPost,
  getPosts,
  getPost,
} from "../controllers/posts.js";

const router = Router();

router.route("/").get(getPosts).post(createPost);
router.route("/:id").get(getPost).put(editPost).delete(deletePost);

export default router;
