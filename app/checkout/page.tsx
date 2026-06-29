"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  const [customer, setCustomer] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  if (cart.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">
          Your Cart Is Empty 🛒
        </h1>
      </div>
    );
  }

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * item.quantity,
    0
  );

  async function placeOrder() {
    if (!customer || !phone || !email || !address) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer,
          phone,
          email,
          address,
          amount: total,
          items: cart,
        }),
      });

      const data = await response.json();

      if (data.success) {
        clearCart();

        alert("Order Placed Successfully!");

        window.location.href = "/success";
      } else {
        alert("Order Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  }

  return (
    <div className="min-h-screen bg-[#f7faf5] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="mb-10 text-center text-5xl font-bold text-green-700">
          Checkout
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-xl lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold">
              Order Summary
            </h2>

            {cart.map((item) => (
              <div
                key={item.name}
                className="mb-4 flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-xl object-cover"
                  />

                  <div>
                    <h3 className="font-bold">
                      {item.name}
                    </h3>

                    <p>Qty: {item.quantity}</p>

                    <p>₹{item.price}</p>
                  </div>
                </div>

                <div className="font-bold">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="mb-6 text-2xl font-bold">
              Delivery Details
            </h2>

            <input
              value={customer}
              onChange={(e) =>
                setCustomer(e.target.value)
              }
              placeholder="Full Name"
              className="mb-3 w-full rounded-xl border p-4"
            />

            <input
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              placeholder="Phone Number"
              className="mb-3 w-full rounded-xl border p-4"
            />

            <input
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Email"
              className="mb-3 w-full rounded-xl border p-4"
            />

            <textarea
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
              placeholder="Full Address"
              rows={4}
              className="mb-4 w-full rounded-xl border p-4"
            />

            <div className="mb-6 flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={placeOrder}
              className="w-full rounded-2xl bg-green-600 py-4 font-bold text-white hover:bg-green-700"
            >
              Place Order 🚀
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}