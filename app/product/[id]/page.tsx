"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ShoppingCart, Star } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function ProductPage() {
  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product)
    return <div className="p-10">Loading...</div>;

  const image =
    product.image && product.image.trim() !== ""
      ? product.image
      : "https://images.unsplash.com/photo-1542838132-92c53300491e";

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">

      <div className="grid gap-12 md:grid-cols-2">

        {/* IMAGE */}
        <div className="overflow-hidden rounded-3xl border">
          <img
            src={image}
            alt={product.name}
            className="h-[500px] w-full object-cover"
          />
        </div>

        {/* DETAILS */}
        <div>

          <h1 className="text-4xl font-black">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-2 text-yellow-500">
            <Star className="fill-yellow-400" />
            <span className="font-semibold">4.8</span>
            <span className="text-gray-500">(1.2k reviews)</span>
          </div>

          <p className="mt-6 text-gray-600">
            {product.description}
          </p>

          <div className="mt-6 text-4xl font-black text-green-600">
            ₹{product.price}
          </div>

          <div className="mt-8 flex gap-4">

            <button
              onClick={() =>
                addToCart({
                  name: product.name,
                  price: product.price,
                  image,
                })
              }
              className="flex items-center gap-2 rounded-2xl bg-green-600 px-6 py-4 font-bold text-white"
            >
              <ShoppingCart />
              Add To Cart
            </button>

            <button className="rounded-2xl border px-6 py-4 font-bold">
              Buy Now
            </button>

          </div>

          {/* INFO BOX */}
          <div className="mt-10 space-y-3 text-sm text-gray-500">

            <p>🚚 Delivery in 10–30 mins</p>
            <p>🔒 Secure Payments</p>
            <p>↩ Easy Return Policy</p>

          </div>

        </div>

      </div>
    </div>
  );
}