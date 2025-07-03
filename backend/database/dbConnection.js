// backend/database/dbConnection.js
import mongoose from "mongoose";

export const dbConnection = () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    console.error("❌ MONGO_URI is undefined. Check your config.env and dotenv path.");
    process.exit(1);
  }

  mongoose
    .connect(mongoURI, {
      dbName:"CLINIC_MANAGEMENT_WEB",
    })
    .then(() => {
      console.log("✅ Connected to MongoDB database!");
    })
    .catch((err) => {
      console.error("❌ Failed to connect to MongoDB:", $(err));
      process.exit(1);
    });
};
