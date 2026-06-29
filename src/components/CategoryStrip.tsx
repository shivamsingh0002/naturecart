export default function CategoryStrip() {
  const categories = [
    "🍎 Fruits",
    "🥦 Vegetables",
    "🥛 Dairy",
    "🌾 Grains",
    "🥜 Dry Fruits",
    "🍯 Organic",
    "🔥 Offers",
    "🥗 Healthy Food",
    "☕ Beverages",
    "🛍 New Arrivals",
  ];

  return (
    <div className="border-b bg-gradient-to-r from-green-50 to-white">

      <div className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-6 py-4">

        {categories.map((cat) => (
          <div
            key={cat}
            className="cursor-pointer whitespace-nowrap rounded-full border bg-white px-5 py-2 text-sm font-semibold shadow-sm transition hover:-translate-y-1 hover:bg-green-600 hover:text-white"
          >
            {cat}
          </div>
        ))}

      </div>

    </div>
  );
}