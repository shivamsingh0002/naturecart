"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Fresh Organic Groceries",
    subtitle: "Get 50% OFF on first order",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e",
    button: "Shop Now",
  },
  {
    title: "Farm Fresh Vegetables",
    subtitle: "Delivered in 10 minutes",
    image:
      "https://images.unsplash.com/photo-1518843875459-f738682238a6",
    button: "Explore Now",
  },
  {
    title: "Healthy Daily Essentials",
    subtitle: "Best quality at lowest price",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    button: "Buy Now",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="relative h-[500px] w-full"
        >

          <img
            src={slides[index].image}
            className="absolute h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex h-full flex-col items-start justify-center px-10 text-white">

            <h1 className="text-5xl font-black">
              {slides[index].title}
            </h1>

            <p className="mt-4 text-lg">
              {slides[index].subtitle}
            </p>

            <button className="mt-6 rounded-2xl bg-green-500 px-6 py-3 font-bold hover:bg-green-600">
              {slides[index].button}
            </button>

          </div>

        </motion.div>
      </AnimatePresence>

    </section>
  );
}