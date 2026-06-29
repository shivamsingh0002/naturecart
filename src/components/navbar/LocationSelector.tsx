"use client";

import { MapPin } from "lucide-react";

export default function LocationSelector() {
  return (
    <button className="hidden lg:flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 transition hover:border-green-500">
      <MapPin size={18} className="text-green-600" />

      <div className="text-left">
        <p className="text-xs text-gray-500">
          Deliver to
        </p>

        <p className="font-semibold">
          Kolkata
        </p>
      </div>
    </button>
  );
}