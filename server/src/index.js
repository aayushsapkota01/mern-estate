import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MongoDB_URI)
  .then(() => console.log("Connected to MongoDB !!"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log(`Server Running on: http://localhost:3000`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
