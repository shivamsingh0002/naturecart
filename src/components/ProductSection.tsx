"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";

export default function ProductSection() {
  const [products, setProducts] = useState<any[]>([]);

 async function loadProducts(
  search = "",
  category = ""
) {
  const res = await fetch(
    `/api/products?search=${search}&category=${category}`
  );

  const data = await res.json();

  setProducts(data);
}

useEffect(() => {
  loadProducts();
}, []);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
           <h2 className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
            Featured Products
          </h2>

          <p className="mt-3 text-gray-500">
            Fresh Organic Collection
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
  key={product.id}
  product={{
    id: product.id,
    name: product.name,
    price: product.price,
    oldPrice: product.price + 50,
    rating: 4.8,
    image: product.image,
  }}
/>
          ))}
        </div>
      </div>
    </section>
  );
}