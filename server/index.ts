/** @format */

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const routes = require("./src/routes/projectRoutes");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
app.use(cors());
// app.use(express.json());
const port = process.env.PORT || 8000;
// The (||8000 is written so that if the server does not read at 7000 it would fall back to it but its not compulsory)
const jsonParser = bodyParser.json();
app.use(jsonParser);
app.use("/api", routes);

connectDB();
app.listen(process.env.PORT, () =>
  console.log(`Server on ${process.env.PORT}`)
);
