export default function FlashSale() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-12 text-white shadow-2xl">

          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

            <div>
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-bold">
                ⚡ Limited Time Deal
              </span>

              <h2 className="mt-5 text-6xl font-extrabold">
                Flash Sale
              </h2>

              <p className="mt-4 text-xl">
                Up to 60% OFF on Organic Products
              </p>
            </div>

            <div className="flex gap-4">

              <div className="rounded-2xl bg-white/20 p-5 text-center">
                <h3 className="text-3xl font-bold">12</h3>
                <p>Hours</p>
              </div>

              <div className="rounded-2xl bg-white/20 p-5 text-center">
                <h3 className="text-3xl font-bold">35</h3>
                <p>Min</p>
              </div>

              <div className="rounded-2xl bg-white/20 p-5 text-center">
                <h3 className="text-3xl font-bold">20</h3>
                <p>Sec</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}