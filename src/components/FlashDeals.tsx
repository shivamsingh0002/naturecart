"use client";

import Link from "next/link";
import { Flame, ArrowRight } from "lucide-react";

const deals = [
  {
    id: 1,
    name: "Organic Apple",
    price: 149,
    oldPrice: 199,
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
  },
  {
    id: 2,
    name: "Fresh Banana",
    price: 49,
    oldPrice: 69,
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224",
  },
  {
    id: 3,
    name: "Organic Tomato",
    price: 39,
    oldPrice: 55,
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337",
  },
  {
    id: 4,
    name: "Fresh Milk",
    price: 69,
    oldPrice: 89,
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150",
  },
];
export default function FlashDeals() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-red-600">
              <Flame size={18} />
              Flash Deals
            </div>

            <h2 className="mt-3 text-4xl font-black">
              Limited Time Offers
            </h2>

          </div>

          <Link
            href="/offers"
            className="flex items-center gap-2 font-semibold text-green-600"
          >
            View All
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {deals.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="relative">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">
                  30% OFF
                </div>

              </div>

              <div className="p-5">

                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <div className="mt-3 flex items-center gap-3">

                  <span className="text-2xl font-bold text-green-600">
                    ₹{item.price}
                  </span>

                  <span className="text-gray-400 line-through">
                    ₹{item.oldPrice}
                  </span>

                </div>

                <button className="mt-5 w-full rounded-2xl bg-green-600 py-3 font-bold text-white transition hover:bg-green-700">
                  Add To Cart
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}