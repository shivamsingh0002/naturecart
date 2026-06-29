"use client";

export default function ProductFilters({
onFilter,
}: {
onFilter: (
search: string,
category: string
) => void;
}) {
return ( <div className="mb-8 flex gap-4">
<input
placeholder="Search products..."
className="flex-1 rounded-xl border p-4"
onChange={(e) =>
onFilter(e.target.value, "")
}
/>

  <select
    className="rounded-xl border p-4"
    onChange={(e) =>
      onFilter("", e.target.value)
    }
  >
    <option value="">
      All Categories
    </option>

    <option value="fruits">
      Fruits
    </option>

    <option value="vegetables">
      Vegetables
    </option>

    <option value="organic">
      Organic
    </option>
  </select>
</div>

);
}
