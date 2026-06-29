export default function AIRecommendations() {
  const products = [
    {
      name: "Organic Apple",
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    },
    {
      name: "Fresh Milk",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    },
    {
      name: "Organic Honey",
      image:
        "https://images.unsplash.com/photo-1587049352846-4a222e784d38",
    },
    {
      name: "Healthy Grains",
      image:
        "https://images.unsplash.com/photo-1515543904379-3d757afe72e4",
    },
  ];

  return (
    <section className="py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700">
            🤖 AI Powered Suggestions
          </span>

          <h2 className="mt-5 text-5xl font-extrabold">
            Recommended For You
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {products.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2"
            >
              <img
                src={item.image}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">

                <h3 className="font-bold">
                  {item.name}
                </h3>

                <button className="mt-4 w-full rounded-xl bg-green-600 py-3 font-semibold text-white">
                  View Product
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}