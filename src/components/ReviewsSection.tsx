"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    text: "Delivery super fast hai and products are very fresh. Blinkit level experience!",
    rating: 5,
  },
  {
    name: "Anjali Verma",
    text: "Organic fruits quality is amazing. Packaging bhi premium hai.",
    rating: 4,
  },
  {
    name: "Amit Singh",
    text: "Best grocery app I have used. Prices are also affordable.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    text: "Customer support very responsive. Highly recommended!",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            ⭐ Customer Reviews
          </span>

          <h2 className="mt-5 text-5xl font-black">
            What Our Users Say
          </h2>

          <p className="mt-3 text-gray-500">
            Real feedback from real customers
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {reviews.map((r, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              {/* STARS */}
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={18}
                    className="fill-yellow-400"
                  />
                ))}
              </div>

              {/* TEXT */}
              <p className="mt-4 text-gray-600">
                "{r.text}"
              </p>

              {/* NAME */}
              <h4 className="mt-6 font-bold text-green-700">
                {r.name}
              </h4>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}