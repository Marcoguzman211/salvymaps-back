require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const cloudinaryConfig = require("./config/cloudinary");
const userRouter = require("./routes/users");

// Initialize Cloudinary
cloudinaryConfig();

const app = express();

app.use(express.json());

// Routes
app.use("/api/users", userRouter);

// Logic here

module.exports = app;
