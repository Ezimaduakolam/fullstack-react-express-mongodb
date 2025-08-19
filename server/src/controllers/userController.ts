/** @format */

const User = require("../models/User");

const getAllUsers = async (req: any, res: any) => {
  const users = await User.find();
  res.json(users);
};

const getUser = async (req: any, res: any) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

const updateUser = async (req: any, res: any) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

const deleteUser = async (req: any, res: any) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: "User deleted" });
};
module.exports = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
