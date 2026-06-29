"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function WishlistButton() {
  return (
    <Link href="/wishlist">
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="rounded-2xl border border-gray-200 bg-white p-3 hover:border-pink-400"
      >
        <Heart size={20} />
      </motion.div>
    </Link>
  );
}