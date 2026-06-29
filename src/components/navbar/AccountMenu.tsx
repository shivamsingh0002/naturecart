"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Package, Settings, LogOut, ChevronDown } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { AnimatePresence, motion } from "framer-motion";

export default function AccountMenu() {
  const { data: session } = useSession();

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 hover:border-green-500"
      >
        <User size={20} />

        <div className="hidden text-left lg:block">
          <p className="text-xs text-gray-500">
            Hello
          </p>

          <p className="font-semibold">
            {session?.user?.name || "Account"}
          </p>
        </div>

        <ChevronDown size={16} />
      </button>

      <AnimatePresence>

        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 15,
            }}
            className="absolute right-0 mt-4 w-72 rounded-3xl border bg-white p-3 shadow-2xl"
          >
            {session ? (
              <>
                <Link
                  href="/profile"
                  className="flex items-center gap-3 rounded-xl p-3 hover:bg-gray-100"
                >
                  <User size={18} />
                  My Profile
                </Link>

                <Link
                  href="/orders"
                  className="flex items-center gap-3 rounded-xl p-3 hover:bg-gray-100"
                >
                  <Package size={18} />
                  My Orders
                </Link>

                <Link
                  href="/settings"
                  className="flex items-center gap-3 rounded-xl p-3 hover:bg-gray-100"
                >
                  <Settings size={18} />
                  Settings
                </Link>

                <button
                  onClick={() => signOut()}
                  className="flex w-full items-center gap-3 rounded-xl p-3 text-red-500 hover:bg-red-50"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block rounded-xl bg-green-600 p-3 text-center font-semibold text-white"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="mt-3 block rounded-xl border p-3 text-center"
                >
                  Create Account
                </Link>
              </>
            )}
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}