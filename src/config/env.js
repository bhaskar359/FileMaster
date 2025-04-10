require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/file-forge",
  DB_NAME: process.env.DB_NAME || "Bhaskars",
  JWT_SECRET: process.env.JWT_SECRET || "supersecretkey",
  UPLOAD_DIR: process.env.UPLOAD_DIR || "src/uploads",
};
