// backend/app.js
import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

// ✅ Load environment variables from config.env at the root
dotenv.config({ path: "./config.env" });

const app = express();

// ✅ Connect to MongoDB
dbConnection();

// ✅ CORS setup
app.use(
  cors({
    origin: [process.env.FRONTEND_URI, process.env.DASHBOARD_URI],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Core middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// ✅ Routes
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

// ✅ Error handling middleware (always after routes)
app.use(errorMiddleware);

export default app;
