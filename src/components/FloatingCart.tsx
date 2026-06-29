"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function FloatingCart() {
  const cart = useCartStore((state) => state.cart);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  if (totalItems === 0) return null;

  return (
    <Link
      href="/cart"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl text-white shadow-2xl transition hover:scale-110"
    >
      🛒

      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
        {totalItems}
      </span>
    </Link>
  );
}