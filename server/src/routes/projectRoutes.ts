/** @format */

const express = require("express");
const { signup, login } = require("../controllers/authController");
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { protect } = require("../middlewares/auth");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/users", protect, getAllUsers);
router.get("/users/:id", protect, getUser);
router.put("/users/:id", protect, updateUser);
router.delete("/users/:id", protect, deleteUser);

module.exports = router;
