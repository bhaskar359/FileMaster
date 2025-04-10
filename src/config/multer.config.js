const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { UPLOAD_DIR } = require("./env");

// Resolve the full path from root of project
const uploadPath = path.resolve(__dirname, "..", "..", UPLOAD_DIR);

// Create the folder if it doesn’t exist
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const diskStore = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const memStore = multer.memoryStorage();

const uploadToDisk = multer({
  storage: diskStore,
  limits: {
    fileSize: 100 * 1024 * 1024,
  },
});
const uploadToMemory = multer({
  storage: memStore,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

module.exports = {
  uploadToDisk,
  uploadToMemory,
};
