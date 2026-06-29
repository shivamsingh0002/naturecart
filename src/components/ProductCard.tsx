"use client";

import Link from "next/link";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useCartStore } from "@/store/cartStore";

type ProductProps = {
  product: {
    id: string;
    name: string;
    price: number;
    image?: string;
    rating?: number;
    oldPrice?: number;
    stock?: number;
  };
};

export default function ProductCard({
  product,
}: ProductProps) {
  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const image =
    product.image && product.image.trim() !== ""
      ? product.image
      : "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900";

  const oldPrice =
    product.oldPrice || product.price + 100;

  const discount = Math.round(
    ((oldPrice - product.price) / oldPrice) * 100
  );

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-2xl"
    >
      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
          {discount}% OFF
        </span>

        <span className="absolute right-4 top-4 rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">
          Bestseller
        </span>

        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/30 opacity-0 transition group-hover:opacity-100">

          <button className="rounded-full bg-white p-3 shadow-lg">
            <Heart size={18} />
          </button>

          <button className="rounded-full bg-white p-3 shadow-lg">
            <Eye size={18} />
          </button>

        </div>

      </div>

      <div className="p-6">

        <div className="mb-3 flex items-center gap-2">

          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="font-semibold">
            {product.rating || 4.8}
          </span>

          <span className="text-sm text-gray-500">
            (1.2k Reviews)
          </span>

        </div>

        <Link href={`/product/${product.id}`}>
          <h3 className="line-clamp-2 text-xl font-bold transition group-hover:text-green-600">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-gray-500">
          Farm Fresh • Organic • Premium Quality
        </p>

        <div className="mt-4 flex items-center gap-3">

          <span className="text-3xl font-black text-green-600">
            ₹{product.price}
          </span>

          <span className="text-lg text-gray-400 line-through">
            ₹{oldPrice}
          </span>

        </div>

        <div className="mt-4 flex items-center justify-between">

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            🚚 Delivery in 20 min
          </span>

          <span className="text-sm text-green-600">
            In Stock
          </span>

        </div>

        <button
          onClick={() =>
            addToCart({
              name: product.name,
              price: product.price,
              image,
            })
          }
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 py-4 font-bold text-white transition hover:scale-[1.02]"
        >
          <ShoppingCart size={20} />
          Add To Cart
        </button>

      </div>
    </motion.div>
  );
}