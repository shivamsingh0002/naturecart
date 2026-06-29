import { Server } from "socket.io";

export const runtime = "nodejs";

let io: Server;

export async function GET(req: any) {
  if (!io) {
    io = new Server({
      path: "/api/socket",
    });

    io.on("connection", (socket) => {
      console.log("⚡ Client connected:", socket.id);

      socket.on("join-order", (orderId) => {
        socket.join(orderId);
      });

      socket.on("order-updated", (data) => {
        io.to(data.orderId).emit("status-changed", data);
      });
    });
  }

  return new Response("Socket Server Running");
}