import next from "next";
import { createServer } from "http";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const app = next({
  dev,
  hostname,
  port,
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer((req, res) => {
    handle(req, res);
  });

  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("✅ Client Connected:", socket.id);

    socket.on("join-order", (orderId) => {
      socket.join(orderId);
      console.log(`📦 Joined Order Room: ${orderId}`);
    });

    socket.on("orderUpdated", (data) => {
      if (data?.orderId) {
        io.to(data.orderId).emit("orderUpdated", data);
      } else {
        io.emit("orderUpdated", data);
      }
    });

    socket.on("disconnect", () => {
      console.log("❌ Client Disconnected:", socket.id);
    });
  });

  global.io = io;

  httpServer.listen(port, () => {
    console.log(`🚀 NatureCart running at http://${hostname}:${port}`);
  });
});