export default function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-[40px] bg-green-600 p-12 text-white">
        <h2 className="text-4xl font-extrabold">
          Subscribe For Healthy Living
        </h2>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-2xl px-6 py-4 text-black"
          />

          <button className="rounded-2xl bg-white px-8 py-4 font-bold text-green-700">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}