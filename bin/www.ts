#!/usr/bin/env ts-node

// load environment variables
require("dotenv").config();

import app from "../app";
import http from "node:http";
import { Server as Socket } from "socket.io";
import connectDatabase from "@helpers/connectDatabase";
import socketController from "socket/init";
import signSocket from "socket/signSocket";
import fs from "node:fs";
// import SocketSign from "@routes/sockets/sign";

const port = normalizePort(process.env.PORT || "8000");
app.set("port", port);

const server = http.createServer(app);

function normalizePort(val: string) {
  const port = parseInt(val, 10);

  if (isNaN(port)) return val;
  if (port >= 0) return port;

  return false;
}

// prevent running server from this file but from test file
if (process.env.NODE_ENV !== "Testing") {
  server.on("listening", async () => {
    const io = await handleServerListening();

    app.set("io", io);
    io.on("connection", (socket) => new socketController(socket));
  });
  server.listen(port);
}

export async function handleServerListening() {
  // ensure database is connected
  await connectDatabase();

  // create socket server
  const io = new Socket(server, {
    pingTimeout: 30000,
    pingInterval: 30000,
    // allowRequest: socketRequestHandler,
  });

  io.use(signSocket);

  const addr = server.address();
  const bind =
    typeof addr === "string"
      ? `pipe ${addr}`
      : `https://localhost:${addr!.port}`;

  console.log(`Server listening on ${bind}`);

  return io;
}

export default server;
