import { create } from "zustand";

import { Product } from "@/typings/product.type";

export interface CartStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  clearCart: () => void;
}

const createCartStore = () =>
  create<CartStore>((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    addProduct: (product) =>
      set((state) => ({ products: [...state.products, product] })),
    removeProduct: (product) =>
      set((state) => ({
        products: state.products.filter((p) => p.id !== product.id),
      })),
    clearCart: () => set({ products: [] }),
  }));

export const useCartStore = createCartStore();
