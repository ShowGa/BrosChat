import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { app, server } from "./socket/socket.js";
import authRoute from "./Routes/auth-Route.js";
import messageRoute from "./Routes/message-Route.js";
import userRoute from "./Routes/user-Route.js";

dotenv.config();

const PORT = process.env.PORT || 8080;
const __dirname = path.resolve();

mongoose
  .connect(process.env.MONGODB_CONNECTION)
  .then(() => {
    console.log("Successfully connect to MongoDB");
  })
  .catch((e) => {
    console.log(e);
  });

/*----Middleware----*/
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // to parse the req.body JSON payload
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  return res.status(404).json("Page Not Found !");
});

server.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`);
});
