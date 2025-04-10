const express = require("express");
const router = express.Router();
const FileController = require("./file.controller");
const { uploadToDisk, uploadToMemory } = require("../config/multer.config");

/**
 * @swagger
 * /api/files/upload-disk:
 *   post:
 *     summary: Upload a file to disk
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: File uploaded successfully
 */
router.post(
  "/upload-disk",
  uploadToDisk.single("file"),
  FileController.uploadFileToDisk
);

/**
 * @swagger
 * /api/files/upload-image:
 *   post:
 *     summary: Upload profile image
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Image uploaded
 */
router.post(
  "/upload-image",
  uploadToMemory.single("file"),
  FileController.uploadProfile
);

module.exports = router;
