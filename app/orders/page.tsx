"use client";

import { useEffect, useState, useCallback } from "react";
import { useOrderTracking } from "@/hooks/useOrderTracking";
import { useSocket } from "@/hooks/useSocket";
export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  const loadOrders = useCallback(async () => {
    try {
      const res = await fetch("/api/orders");

      if (!res.ok) {
        throw new Error("Failed to fetch orders");
      }

      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  // Realtime update when admin changes status
  useSocket(loadOrders);

  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">
        My Orders 🚚
      </h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <OrderCard key={order.id} orderId={order.id} />
        ))
      )}
    </div>
  );
}

function OrderCard({ orderId }: { orderId: string }) {
  const order = useOrderTracking(orderId);

  if (!order) {
    return (
      <div className="mb-6 rounded-xl bg-white p-6 shadow">
        Loading...
      </div>
    );
  }

  const progress =
    order.status === "Pending"
      ? "25%"
      : order.status === "Shipped"
      ? "50%"
      : order.status === "Out for Delivery"
      ? "75%"
      : "100%";

  return (
    <div className="mb-6 rounded-2xl bg-white p-6 shadow">
      <h2 className="text-xl font-bold">
        Order #{order.id}
      </h2>

      <p className="mt-2">Customer: {order.customer}</p>

      <p className="mt-2">Amount: ₹{order.amount}</p>

      <p className="mt-2">
        Status:
        <span className="ml-2 font-bold text-green-600">
          {order.status}
        </span>
      </p>

      <div className="mt-4 h-2 w-full rounded bg-gray-200">
        <div
          className="h-2 rounded bg-green-600 transition-all duration-500"
          style={{ width: progress }}
        />
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Items</h3>

        {order.items?.map((item: any) => (
          <div
            key={item.id}
            className="mt-2 flex justify-between border-b pb-2"
          >
            <span>{item.name}</span>

            <span>
              {item.quantity} × ₹{item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}