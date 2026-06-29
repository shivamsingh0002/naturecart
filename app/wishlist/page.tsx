"use client";

import { useEffect, useState } from "react";

export default function WishlistPage() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/wishlist")
      .then((r) => r.json())
      .then(setItems);
  }, []);

  return (
    <div className="mx-auto max-w-7xl p-10">

      <h1 className="mb-8 text-4xl font-bold">
        ❤️ My Wishlist
      </h1>

      <div className="grid gap-6 md:grid-cols-4">

        {items.map((item: any) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white p-5 shadow"
          >
            <p className="font-semibold">
              Product ID
            </p>

            <p>{item.productId}</p>
          </div>
        ))}

      </div>

    </div>
  );
}