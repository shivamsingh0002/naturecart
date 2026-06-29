import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-xl font-bold text-white shadow-lg">
        N
      </div>

      <div>
        <h2 className="text-2xl font-black leading-none">
          <span className="text-green-600">Nature</span>
          <span className="text-gray-900">Cart</span>
        </h2>

        <p className="text-xs text-gray-500">
          Fresh Grocery Delivered
        </p>
      </div>
    </Link>
  );
}