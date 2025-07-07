/* eslint-disable @typescript-eslint/no-explicit-any */
import { isEqual } from "@/lib/burger";
import { Burger } from "@/types/burger";
import { Cart } from "@/types/cart";
import { atom } from 'jotai'
import { atomWithStorage } from "jotai/utils";

export const cartAtom = atomWithStorage<Cart[]>("cart", []);

export const getCartItems = atom((get: any): Cart[] => {
  if(typeof window === 'undefined') {
    return []
  }
  return get(cartAtom);
})

export const addToCart = atom(null, (get: any, set: any, newBurguer: Burger) => {
  const currentCart: Cart[] = get(cartAtom);

  const burguerExist: Cart | undefined = currentCart.find((b: Cart) => isEqual(b, newBurguer));

  if (burguerExist) {
    const updatedCart = currentCart.map((item: Cart) =>
      isEqual(item, newBurguer) ? { ...item, quant: item.quant + 1 } : item
    );
    set(cartAtom, updatedCart);
  } else {
    set(cartAtom, (prev: Cart[]) => [...prev, { ...newBurguer, quant: 1 }]);
  }
}) 

export const removeToCart = atom(null, (get: any, set: any, id: number) => {
  const currentCart: Cart[] = get(cartAtom)

  const burguerExist: Cart | undefined = currentCart.find((b) => b.id === id);

  if (burguerExist) {
    if (burguerExist.quant <= 1) {
      const updatedCart = currentCart.filter((item) => item.id !== id);
      set(cartAtom, updatedCart)
    } else {
      const updatedCart = currentCart.map((item) => item.id === id ? { ...item, quant: item.quant-- } : item);
      set(cartAtom, updatedCart);
    }
  }
})

export const cleanCart = atom(null, (_,set: any) => {
  set(cartAtom, []);
})

export const getPriceTotal = atom((get: any) => {
  const currentCart: Cart[] = get(cartAtom)
  return currentCart.reduce((acc, curr) => acc + curr.price * curr.quant, 0)
})