"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useCartStore } from "@/store/cartStore";

export default function CartButton() {
  const cart = useCartStore((state) => state.cart);

  return (
    <Link href="/cart">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-3 rounded-2xl bg-green-600 px-5 py-3 text-white shadow-lg transition hover:bg-green-700"
      >
        <ShoppingCart size={22} />

        <div className="hidden text-left lg:block">
          <p className="text-xs text-green-100">Your Cart</p>
          <p className="font-semibold">
            {cart.length} Items
          </p>
        </div>

        {cart.length > 0 && (
          <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
            {cart.length}
          </span>
        )}
      </motion.div>
    </Link>
  );
}