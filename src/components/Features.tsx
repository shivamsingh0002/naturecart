const features = [
  "100% Organic",
  "Fast Delivery",
  "Secure Payments",
  "Farm Fresh",
];

export default function Features() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature}
            className="rounded-3xl bg-[#f7faf5] p-8 text-center"
          >
            <div className="mb-4 text-4xl">🌱</div>

            <h3 className="text-xl font-bold">
              {feature}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}