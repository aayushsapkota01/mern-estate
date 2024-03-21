import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routes/user.routes.js";

const app = express();

mongoose
  .connect(process.env.MongoDB_URI)
  .then(() => console.log("Connected to MongoDB !!"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log(`Server Running on: http://localhost:3000`);
});

app.use("/api/user", userRouter);
