/** @format */

import express from "express";
import { signup, login } from "../controllers/authController";
import {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";
import { protect } from "../middlewares/auth";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/users", protect, getAllUsers);
router.get("/users/:id", protect, getUser);
router.put("/users/:id", protect, updateUser);
router.delete("/users/:id", protect, deleteUser);

export default router;
