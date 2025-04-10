const { MongoClient } = require("mongodb");
const { MONGO_URI, DB_NAME } = require("./env");

const client = new MongoClient(MONGO_URI);

async function connectDB() {
  await client.connect();
  console.log("✅ Connected to MongoDB");
  return client.db(DB_NAME);
}

module.exports = { connectDB, client };
