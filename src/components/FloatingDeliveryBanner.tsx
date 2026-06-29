"use client";

export default function FloatingDeliveryBanner() {
  return (
    <div className="fixed bottom-6 left-6 z-50 hidden lg:block">

      <div className="rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-4 text-white shadow-2xl">

        <div className="flex items-center gap-4">

          <div className="text-4xl">
            🚚
          </div>

          <div>
            <h3 className="font-bold">
              Delivery in 15 Minutes
            </h3>

            <p className="text-sm text-green-100">
              Fresh groceries near you
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}