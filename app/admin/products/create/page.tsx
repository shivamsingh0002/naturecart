"use client";

import { useState } from "react";

export default function CreateProductPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("100");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);


  async function uploadImage(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploading(true);

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: reader.result,
        }),
      });

      const data = await res.json();

      setImage(data.url);
      setUploading(false);
    };
  }

  async function createProduct() {
  try {
    console.log({
  name,
  description,
  category,
  image,
  stock,
  price,
});

    alert("Save Product Clicked");

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        category,
        image,
        stock: Number(stock),
        price: Number(price),
      }),
    });

    const data = await res.json();

    console.log(data);
    alert(JSON.stringify(data));

  } catch (error) {
    console.error(error);
    alert("API Error");
  }
}

  return (
    <div className="mx-auto max-w-3xl p-8">
      <h1 className="mb-8 text-4xl font-bold">
        Add Product
      </h1>

      <input
        placeholder="Product Name"
        className="mb-4 w-full border p-4"
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <textarea
        placeholder="Description"
        className="mb-4 w-full border p-4"
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <input
        placeholder="Category"
        className="mb-4 w-full border p-4"
        onChange={(e) =>
          setCategory(e.target.value)
        }
      />

      <input
        placeholder="Price"
        type="number"
        className="mb-4 w-full border p-4"
        onChange={(e) =>
          setPrice(e.target.value)
        }
      />

      <input
        placeholder="Stock"
        type="number"
        className="mb-4 w-full border p-4"
        value={stock}
        onChange={(e) =>
          setStock(e.target.value)
        }
      />

      <input
        type="file"
        accept="image/*"
        className="mb-4 w-full border p-4"
        onChange={uploadImage}
      />

      {uploading && (
        <p>Uploading Image...</p>
      )}

      {image && (
        <img
          src={image}
          alt="Preview"
          className="mb-4 h-40 rounded-xl"
        />
      )}

      <button
  type="button"
  onClick={() => createProduct()}
  className="rounded-xl bg-green-600 px-8 py-4 text-white"
>
  Save Product
</button>
    </div>
  );
}