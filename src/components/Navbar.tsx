"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Grid2x2, Tag } from "lucide-react";

import Logo from "./navbar/Logo";
import SearchBar from "./navbar/SearchBar";
import LocationSelector from "./navbar/LocationSelector";
import AccountMenu from "./navbar/AccountMenu";
import WishlistButton from "./navbar/WishlistButton";
import NotificationButton from "./navbar/NotificationButton";
import CartButton from "./navbar/CartButton";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-xl">

      {/* Top Bar */}
      <div className="border-b bg-green-600 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <p>🚚 Free Delivery on Orders Above ₹499</p>

          <div className="hidden gap-6 md:flex">
            <Link href="/offers">Today's Offers</Link>
            <Link href="/seller">Become Seller</Link>
            <Link href="/support">Support</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}

      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-4">

        <Logo />

        <LocationSelector />

        <SearchBar />

        <div className="hidden items-center gap-3 lg:flex">

          <NotificationButton />

          <WishlistButton />

          <AccountMenu />

          <CartButton />

        </div>

        {/* Mobile */}

        <button
          className="ml-auto lg:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={30} />
        </button>

      </div>

      {/* Categories */}

      <div className="hidden border-t bg-white lg:block">

        <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-4">

          <Link
            href="/categories"
            className="flex items-center gap-2 font-semibold text-green-700"
          >
            <Grid2x2 size={18} />
            Categories
          </Link>

          <Link href="/category/fruits">Fruits</Link>

          <Link href="/category/vegetables">
            Vegetables
          </Link>

          <Link href="/category/dairy">
            Dairy
          </Link>

          <Link href="/category/grains">
            Grains
          </Link>

          <Link href="/category/snacks">
            Snacks
          </Link>

          <Link
            href="/offers"
            className="flex items-center gap-2 font-bold text-red-500"
          >
            <Tag size={18} />
            Deals
          </Link>

        </div>

      </div>

      {/* Mobile Drawer */}

      {mobileOpen && (

        <div className="fixed inset-0 z-50 bg-black/40">

          <div className="h-full w-80 bg-white p-6 shadow-2xl">

            <div className="mb-8 flex items-center justify-between">

              <Logo />

              <button
                onClick={() => setMobileOpen(false)}
              >
                <X size={28} />
              </button>

            </div>

            <SearchBar />

            <div className="mt-8 space-y-5">

              <Link
                href="/categories"
                className="block"
              >
                Categories
              </Link>

              <Link
                href="/offers"
                className="block"
              >
                Offers
              </Link>

              <Link
                href="/wishlist"
                className="block"
              >
                Wishlist
              </Link>

              <Link
                href="/orders"
                className="block"
              >
                Orders
              </Link>

              <Link
                href="/cart"
                className="block"
              >
                Cart
              </Link>

              <Link
                href="/login"
                className="block"
              >
                Login
              </Link>

            </div>

          </div>

        </div>

      )}

    </header>
  );
}