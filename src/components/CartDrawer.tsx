"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";

export default function CartDrawer() {
  const [open, setOpen] = useState(false);

  const cart = useCartStore((state) => state.cart);

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-600 px-5 py-4 text-white shadow-xl"
      >
        🛒 {cart.length}
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[380px] bg-white shadow-2xl transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-bold">
            Shopping Cart
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="h-[70vh] overflow-y-auto p-4">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">
              Cart Empty
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.name}
                className="mb-4 rounded-xl border p-3"
              >
                <h3 className="font-bold">
                  {item.name}
                </h3>

                <p className="text-green-600">
                  ₹{item.price}
                </p>

                <p>
                  Qty: {item.quantity}
                </p>
              </div>
            ))
          )}
        </div>

        <div className="absolute bottom-0 w-full border-t bg-white p-5">
          <div className="mb-4 flex justify-between font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <a
            href="/checkout"
            className="block w-full rounded-xl bg-green-600 py-3 text-center text-white"
          >
            Checkout
          </a>
        </div>
      </div>
    </>
  );
}