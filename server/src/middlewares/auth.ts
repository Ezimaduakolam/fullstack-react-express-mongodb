/** @format */

import type = require("express");

const jwt = require("jsonwebtoken");
const { Request, Response, NextFunction } = require("express");

const protect = (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ msg: "Token invalid" });
  }
};
module.exports = {
  protect,
};
