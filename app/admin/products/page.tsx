"use client";

import { useEffect, useState } from "react";

export default function EditProduct({
params,
}: {
params: Promise<{ id: string }>;
}) {
const [product, setProduct] = useState<any>(null);
const [saving, setSaving] = useState(false);

useEffect(() => {
async function load() {
const { id } = await params;

  const res = await fetch(
    `/api/products/${id}`
  );

  const data = await res.json();

  setProduct(data);
}

load();


}, []);

async function save(e: any) {
e.preventDefault();

setSaving(true);

const form = new FormData(e.target);

await fetch(`/api/products/${product.id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },

  body: JSON.stringify({
    name: form.get("name"),
    description: form.get("description"),
    price: Number(form.get("price")),
    image: form.get("image"),
    category: form.get("category"),
    stock: Number(form.get("stock")),
  }),
});

setSaving(false);

alert("Product Updated Successfully");

window.location.href =
  "/admin/products/list";

}

if (!product) return <p>Loading...</p>;

return ( <div className="mx-auto max-w-3xl p-10"> <h1 className="mb-8 text-4xl font-bold">
Edit Product </h1>

  <form
    onSubmit={save}
    className="space-y-4"
  >
    <input
      name="name"
      defaultValue={product.name}
      className="w-full rounded-xl border p-4"
    />

    <textarea
      name="description"
      defaultValue={product.description}
      className="w-full rounded-xl border p-4"
    />

    <input
      name="price"
      defaultValue={product.price}
      className="w-full rounded-xl border p-4"
    />

    <input
      name="image"
      defaultValue={product.image}
      className="w-full rounded-xl border p-4"
    />

    <input
      name="category"
      defaultValue={product.category}
      className="w-full rounded-xl border p-4"
    />

    <input
      name="stock"
      defaultValue={product.stock}
      className="w-full rounded-xl border p-4"
    />

    <button
      disabled={saving}
      className="rounded-xl bg-green-600 px-8 py-4 text-white"
    >
      {saving
        ? "Updating..."
        : "Save Changes"}
    </button>
  </form>
</div>

);
}
