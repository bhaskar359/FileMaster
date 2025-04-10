const FileService = require("./file.service");

exports.uploadFileToDisk = async (req, res) => {
  try {
    const fileData = await FileService.saveFile(req.file);
    res
      .status(201)
      .json({ message: "File uploaded successfully", file: fileData });
  } catch (error) {
    res
      .status(500)
      .json({ error: "File upload failed", details: error.message });
  }
};

exports.uploadProfile = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const { buffer, mimetype } = req.file;
    const profile = await FileService.saveProfileImage(buffer, mimetype);

    res.status(201).json({ message: "Profile image saved", profile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
