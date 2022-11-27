const express = require("express");
const dotenv = require("dotenv");
const app = express();

// Config
dotenv.config({ path: "src/config/config.env" });

// Default Middlewaes
app.use(express.json());

module.exports = app;
