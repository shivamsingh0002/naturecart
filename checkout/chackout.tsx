"use client";

export default function CheckoutButton() {
  const handlePayment = async () => {
    const res = await fetch("/api/payment/order", {
      method: "POST",
      body: JSON.stringify({
        amount: 499,
      }),
    });

    const data = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "Naturally Organic Store",
      description: "Organic Food Purchase",
      order_id: data.id,

      handler: async function (response: any) {
        alert("Payment Successful");
        console.log(response);
      },

      theme: {
        color: "#16a34a",
      },
    };

    const razor = new (window as any).Razorpay(options);

    razor.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="rounded-2xl bg-green-600 px-8 py-4 text-lg font-semibold text-white"
    >
      Proceed To Payment
    </button>
  );
}