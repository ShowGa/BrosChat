import { Server } from "socket.io";
import http from "http"; // build-in node.js module
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

//
export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; // {userId: socketId}

// listen for connnection and disconnect (online and offline)
io.on("connection", (socket) => {
  console.log("User connnected", socket.id);

  // get authUser._id when connected and make userSocketMap[userId](property) = socket._id
  const userId = socket.handshake.query.userId;
  if (userId !== undefined) userSocketMap[userId] = socket.id;
  //send the event to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));
  // socket.on() is used to listen to the events. Can be used both client and server side.
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    // delete the disconnected user in userSocket
    delete userSocketMap[userId];
    // send the event to all the clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
