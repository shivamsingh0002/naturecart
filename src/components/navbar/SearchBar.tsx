"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="hidden flex-1 lg:flex">
      <div className="relative w-full">

        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          placeholder="Search fruits, vegetables, dairy..."
          className="w-full rounded-full border border-gray-200 bg-gray-50 py-4 pl-14 pr-6 outline-none transition focus:border-green-500 focus:bg-white"
        />

      </div>
    </div>
  );
}