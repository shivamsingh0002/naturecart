"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type Product = {
name: string;
price: number;
image: string;
};

interface CartItem extends Product {
quantity: number;
}

interface CartStore {
cart: CartItem[];

addToCart: (product: Product) => void;
removeFromCart: (name: string) => void;
increaseQuantity: (name: string) => void;
decreaseQuantity: (name: string) => void;
clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
persist(
(set) => ({
cart: [],

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find(
        (item) => item.name === product.name
      );

      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.name === product.name
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      }

      return {
        cart: [
          ...state.cart,
          {
            ...product,
            quantity: 1,
          },
        ],
      };
    }),

  removeFromCart: (name) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => item.name !== name
      ),
    })),

  increaseQuantity: (name) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.name === name
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      ),
    })),

  decreaseQuantity: (name) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.name === name
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),

  clearCart: () =>
    set({
      cart: [],
    }),
}),
{
  name: "naturecart-storage",
}

)
);
