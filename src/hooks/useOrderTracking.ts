"use client";

import { useEffect, useState, useCallback } from "react";
import { useSocket } from "./useSocket";

export function useOrderTracking(orderId: string) {
  const [order, setOrder] = useState<any>(null);

  const fetchOrder = useCallback(async () => {
    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        cache: "no-store",
      });

      if (!res.ok) return;

      const data = await res.json();

      setOrder(data);
    } catch (err) {
      console.error(err);
    }
  }, [orderId]);

  useSocket(fetchOrder, orderId);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);

  return order;
}