/** @format */

import express = require("express");
import cors = require("cors");
import dotenv = require("dotenv");
import connectDB from "./config/db";
import routes from "./routes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

connectDB();
app.listen(process.env.PORT, () =>
  console.log(`Server on ${process.env.PORT}`)
);
