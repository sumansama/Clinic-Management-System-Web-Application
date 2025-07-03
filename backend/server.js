// backend/server.js
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" }); // ✅ CORRECTED PATH

import app from "./app.js";
import cloudinary from "cloudinary";

// Debugging check
console.log("✅ MONGO_URI:", process.env.MONGO_URI);

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
