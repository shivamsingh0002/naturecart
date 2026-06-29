"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductListPage() {
  const [products, setProducts] = useState<any[]>([]);

  async function loadProducts() {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  }

  async function deleteProduct(id: string) {
    if (!confirm("Delete Product?")) return;

    await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    loadProducts();
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="p-8">
      <div className="mb-6 flex justify-between">
        <h1 className="text-3xl font-bold">
          Products
        </h1>

        <Link
          href="/admin/products/create"
          className="rounded bg-green-600 px-4 py-2 text-white"
        >
          Add Product
        </Link>
      </div>

      <div className="grid gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <div>
              <h2 className="font-bold">
                {product.name}
              </h2>

              <p>₹{product.price}</p>
            </div>

            <div className="flex gap-3">
              <Link
                href={`/admin/products/edit/${product.id}`}
                className="rounded bg-blue-500 px-4 py-2 text-white"
              >
                Edit
              </Link>

              <button
                onClick={() =>
                  deleteProduct(product.id)
                }
                className="rounded bg-red-500 px-4 py-2 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}