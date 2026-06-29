"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistStore {
  items: string[];

  toggleWishlist: (name: string) => void;
}

export const useWishlistStore =
  create<WishlistStore>()(
    persist(
      (set) => ({
        items: [],

        toggleWishlist: (name) =>
          set((state) => ({
            items: state.items.includes(name)
              ? state.items.filter(
                  (item) => item !== name
                )
              : [...state.items, name],
          })),
      }),
      {
        name: "wishlist-storage",
      }
    )
  );