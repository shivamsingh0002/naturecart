"use client";

import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <input
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      placeholder="Search products..."
      className="w-full rounded-full border px-5 py-3"
    />
  );
}