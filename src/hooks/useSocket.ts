"use client";

import { useEffect } from "react";
import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export function useSocket(onUpdate: () => void, orderId?: string) {
  useEffect(() => {
    if (!socket) {
      socket = io("http://localhost:3000", {
        transports: ["websocket"],
      });
    }

    socket.on("connect", () => {
      console.log("✅ Socket Connected");

      if (orderId) {
        socket?.emit("join-order", orderId);
      }
    });

    socket.on("orderUpdated", () => {
      console.log("📦 Order Updated");
      onUpdate();
    });

    return () => {
      socket?.off("orderUpdated");
    };
  }, [onUpdate, orderId]);
}