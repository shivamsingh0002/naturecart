export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">

      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-8 lg:py-12">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <span className="inline-flex items-center rounded-full border border-green-200 bg-white px-5 py-2 text-sm font-semibold text-green-700 shadow-sm">
              🌿 100% Organic & Farm Fresh
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
              Healthy Food
              <span className="block bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                Delivered To
              </span>
              Your Doorstep
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Discover premium organic fruits, vegetables, dairy products,
              spices and healthy groceries sourced directly from trusted farms.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="rounded-2xl bg-green-600 px-8 py-4 font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-green-700">
                Shop Now →
              </button>

              <button className="rounded-2xl border border-gray-300 bg-white px-8 py-4 font-bold text-gray-700 shadow-sm transition hover:bg-gray-50">
                Explore Categories
              </button>

            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">

              <div>
                <h3 className="text-3xl font-bold text-green-600">
                  10K+
                </h3>
                <p className="text-sm text-gray-500">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-600">
                  500+
                </h3>
                <p className="text-sm text-gray-500">
                  Organic Products
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-600">
                  50+
                </h3>
                <p className="text-sm text-gray-500">
                  Cities Served
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute -left-6 top-12 z-20 rounded-3xl bg-white p-5 shadow-2xl">
              <p className="text-sm text-gray-500">
                Today's Offer
              </p>

              <h3 className="text-3xl font-bold text-red-500">
                60% OFF
              </h3>
            </div>

            <div className="absolute -right-6 bottom-10 z-20 rounded-3xl bg-white p-5 shadow-2xl">
              <p className="text-sm text-gray-500">
                Free Delivery
              </p>

              <h3 className="font-bold text-green-600">
                Above ₹500
              </h3>
            </div>

            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e"
              alt="Organic Grocery"
              className="h-[650px] w-full rounded-[40px] object-cover shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}