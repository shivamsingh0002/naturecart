export default function SuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7faf5]">
      <div className="rounded-3xl bg-white p-12 text-center shadow-xl">
        <div className="mb-6 text-6xl">🎉</div>

        <h1 className="text-4xl font-bold text-green-600">
          Order Successful
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you for shopping with NatureCart.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-xl bg-green-600 px-8 py-3 text-white"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
}