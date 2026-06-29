export default function OfferBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="rounded-[40px] bg-gradient-to-r from-green-600 to-emerald-500 p-12 text-white">
        <h2 className="text-5xl font-bold">
          Flat 25% OFF
        </h2>

        <p className="mt-4 text-xl">
          On your first organic grocery order
        </p>

        <button className="mt-8 rounded-2xl bg-white px-8 py-4 font-semibold text-green-700">
          Claim Offer
        </button>
      </div>
    </section>
  );
}