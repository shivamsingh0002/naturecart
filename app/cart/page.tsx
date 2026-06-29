"use client";

import { useCartStore } from "@/store/cartStore";
import Link from "next/link";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  const subtotal = cart.reduce((total, item) => {
    const price = (item.price);
    return total + price * item.quantity;
  }, 0);

  const delivery = subtotal > 500 ? 0 : 50;
  const total = subtotal + delivery;

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-10 text-4xl font-bold">
        Shopping Cart
      </h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {cart.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-6 rounded-3xl bg-white p-6 shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-28 w-28 rounded-xl object-cover"
              />

              <div className="flex-1">
                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-green-600">
                  {item.price}
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <button
                    onClick={() => decreaseQuantity(item.name)}
                    className="rounded border px-3 py-1"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.name)}
                    className="rounded border px-3 py-1"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.name)}
                className="rounded-xl bg-red-500 px-4 py-2 text-white"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-white p-6 shadow">
          <h2 className="mb-6 text-2xl font-bold">
            Order Summary
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹{delivery}</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          <Link
  href="/checkout"
  className="mt-8 block w-full rounded-xl bg-green-600 py-3 text-center font-semibold text-white hover:bg-green-700"
>
  Proceed To Checkout
</Link>
        </div>
      </div>
    </div>
  );
}