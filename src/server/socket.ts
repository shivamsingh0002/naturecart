import { Server } from "socket.io";

let io: Server;

export function initSocket(httpServer: any) {
  io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("✅ Socket Connected:", socket.id);

    socket.on("join-order", (orderId: string) => {
      socket.join(orderId);
    });

    socket.on("disconnect", () => {
      console.log("❌ Socket Disconnected");
    });
  });

  return io;
}

export function getIO() {
  return io;
}