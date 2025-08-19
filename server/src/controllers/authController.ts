/** @format */

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const { Request, Response } = require("express");

const signup = async (req: any, res: any) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });
  res.status(201).json(user);
};

// const TaskModel = require("../Models/TaskModel");

// const GetAllTask = async (req, res) => {
//   try {
//     const result = await TaskModel.find()
//       .sort({ createdAt: -1 })
//       .populate("assignedBy");
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(404).json({
//       message: "Failed to fetch data",
//     });
//   }
// };

const login = async (req: any, res: any) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(400).json({ msg: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!);
  res.json({ token, user });
};
module.exports = {
  signup,
  login,
};
