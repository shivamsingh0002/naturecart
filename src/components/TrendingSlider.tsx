"use client";

import ProductCard from "./ProductCard";

const products = [
  {
    id: "t1",
    name: "Organic Strawberry",
    price: 199,
    oldPrice: 299,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
  },
  {
    id: "t2",
    name: "Fresh Coconut Water",
    price: 49,
    oldPrice: 79,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1524594154908-edd28254f5a0",
  },
  {
    id: "t3",
    name: "Organic Avocado",
    price: 129,
    oldPrice: 189,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
  },
  {
    id: "t4",
    name: "Fresh Blueberries",
    price: 249,
    oldPrice: 349,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
  },
  {
    id: "t5",
    name: "Organic Honey Jar",
    price: 399,
    oldPrice: 499,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924",
  },
];

export default function TrendingSlider() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mb-10 flex items-end justify-between">

          <div>
            <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
              🔥 Trending Now
            </span>

            <h2 className="mt-4 text-5xl font-black">
              Best Selling Products
            </h2>

            <p className="mt-3 text-gray-500">
              Most loved products by customers
            </p>
          </div>

        </div>

        {/* SCROLL CONTAINER */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">

          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[300px]"
            >
              <ProductCard product={product} />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}