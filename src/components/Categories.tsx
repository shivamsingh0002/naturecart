const categories = [
  { name: "Fruits", icon: "🍎" },
  { name: "Vegetables", icon: "🥦" },
  { name: "Dairy", icon: "🥛" },
  { name: "Snacks", icon: "🍪" },
  { name: "Beverages", icon: "🥤" },
  { name: "Grains", icon: "🌾" },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="mb-12 text-center">

        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          Categories
        </span>

        <h2 className="mt-5 text-5xl font-extrabold">
          Shop By Category
        </h2>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

        {categories.map((category) => (
          <div
            key={category.name}
            className="group cursor-pointer rounded-3xl border bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-4 text-5xl">
              {category.icon}
            </div>

            <h3 className="font-bold text-gray-800">
              {category.name}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}