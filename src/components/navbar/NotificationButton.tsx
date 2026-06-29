"use client";

import { Bell } from "lucide-react";
import { motion } from "framer-motion";

export default function NotificationButton() {
  return (
    <motion.button
      whileHover={{ rotate: 8 }}
      className="relative rounded-2xl border border-gray-200 bg-white p-3 hover:border-green-500"
    >
      <Bell size={20} />

      <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
    </motion.button>
  );
}