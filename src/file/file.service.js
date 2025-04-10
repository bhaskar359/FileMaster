const path = require("path");
const { connectDB } = require("../config/mongo");

let db;
(async () => {
  db = await connectDB();
})();

exports.saveFile = (file) => {
  if (!file) throw new Error("No Files provided");

  return {
    originalName: file.originalname,
    storedName: file.filename,
    path: file.path,
    size: file.size,
    mimeType: file.mimetype,
    uploadedAt: new Date(),
  };
};

exports.saveProfileImage = async (data, mimeType) => {
  const profile = {
    name: "Test User 1",
    createdAt: new Date(),
    image: {
      data: data,
      contentType: mimeType,
    },
  };
  const result = await db.collection("profiles").insertOne(profile);
  return result;
};
