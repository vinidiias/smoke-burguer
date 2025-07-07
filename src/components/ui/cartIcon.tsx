"use client";
import { getCartItems } from "@/atoms/cartAtom";
import { Cart } from "@/types/cart";
import { useAtomValue } from "jotai/react";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { useAtom } from "jotai";
import { openCheckoutAtom } from "@/atoms/openCheckoutAtom";

export const CartIcon = () => {
  const [, setOpenCheckout] = useAtom(openCheckoutAtom);
  const allItemCart = useAtomValue<Cart[]>(getCartItems);

  return (
    <div
      className="relative flex justify-center items-center cursor-pointer hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 has-[>svg]:px-3 rounded-lg"
      onClick={() => setOpenCheckout(true)}
    >
      <span className="text-[9px] ml-0.5 absolute">{allItemCart.length}</span>
      <PiShoppingCartSimpleThin size={33} />
    </div>
  );
};
