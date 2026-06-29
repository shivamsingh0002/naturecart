"use client";

import ProductCard from "./ProductCard";

const recommendedProducts = [
  {
    id: "r1",
    name: "Premium Organic Mango",
    price: 249,
    oldPrice: 329,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800",
  },
  {
    id: "r2",
    name: "Farm Fresh Broccoli",
    price: 99,
    oldPrice: 139,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=800",
  },
  {
    id: "r3",
    name: "Organic Honey",
    price: 399,
    oldPrice: 499,
    rating: 5,
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=800",
  },
  {
    id: "r4",
    name: "Natural Almonds",
    price: 599,
    oldPrice: 699,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=800",
  },
];

export default function RecommendedSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 flex items-center justify-between">

          <div>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              AI Recommendation
            </span>

            <h2 className="mt-5 text-5xl font-black">
              Recommended For You
            </h2>

            <p className="mt-3 text-gray-500">
              Personalized products based on customer preferences.
            </p>

          </div>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {recommendedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>
    </section>
  );
}