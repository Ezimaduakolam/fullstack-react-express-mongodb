/** @format */

import User from "../models/User";

export const getAllUsers = async (req: any, res: any) => {
  const users = await User.find();
  res.json(users);
};

export const getUser = async (req: any, res: any) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

export const updateUser = async (req: any, res: any) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

export const deleteUser = async (req: any, res: any) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: "User deleted" });
};
