export default function StatsSection() {
  const stats = [
    { value: "50K+", label: "Happy Customers" },
    { value: "10K+", label: "Orders Delivered" },
    { value: "500+", label: "Organic Products" },
    { value: "99%", label: "Positive Reviews" },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl bg-white p-8 text-center shadow-lg"
            >
              <h3 className="text-4xl font-extrabold text-green-600">
                {item.value}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}