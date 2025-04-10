const express = require("express");
const app = express();
const path = require("path");
const setupSwagger = require("./config/swagger");

const fileRoutes = require("./file/file.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/files", fileRoutes);

setupSwagger(app);

module.exports = app;
