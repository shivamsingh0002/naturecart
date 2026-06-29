"use client";

export default function CheckoutPage() {
const handleOrder = () => {
alert("Order Placed Successfully!");
window.location.href = "/success";
};

return ( <div className="mx-auto max-w-4xl px-6 py-16"> <h1 className="mb-10 text-4xl font-bold">
Checkout </h1>

  <div className="rounded-3xl bg-white p-8 shadow-xl">
    <div className="grid gap-6 md:grid-cols-2">
      <input
        placeholder="Full Name"
        className="rounded-xl border p-4"
      />

      <input
        placeholder="Phone Number"
        className="rounded-xl border p-4"
      />

      <input
        placeholder="Email"
        className="rounded-xl border p-4"
      />

      <input
        placeholder="City"
        className="rounded-xl border p-4"
      />
    </div>

    <textarea
      rows={4}
      placeholder="Delivery Address"
      className="mt-6 w-full rounded-xl border p-4"
    />

    <button
      onClick={handleOrder}
      className="mt-8 w-full rounded-xl bg-green-600 py-4 font-semibold text-white hover:bg-green-700"
    >
      Place Order
    </button>
  </div>
</div>
);
}
