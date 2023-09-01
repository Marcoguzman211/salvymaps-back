require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const cloudinaryConfig = require("./config/cloudinary");

// Initialize Cloudinary
cloudinaryConfig();

const app = express();

app.use(express.json());

// Logic here

module.exports = app;
