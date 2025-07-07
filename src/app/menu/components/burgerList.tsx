"use client";
import { addToCart, cleanCart, getPriceTotal, removeToCart } from "@/atoms/cartAtom";
import { Burger } from "@/types/burger";
import { useAtomValue, useSetAtom } from "jotai/react";
import { useState } from "react";
import { burgers } from "@/lib/burger";
import { toastMessage } from "../utils/toastMessage";
import { BurgerFooter } from "./burgerFooter";
import { CardBurger } from "./cardBurger";
import { Separator } from "@/components/ui/separator";

export const BurgersList = () => {
  const [allBurgers] = useState<Burger[]>(burgers);
  const addBurgerToCart = useSetAtom(addToCart);
  const removeBurgerToCart = useSetAtom(removeToCart);
  const clean = useSetAtom(cleanCart);
  const priceTotal = useAtomValue(getPriceTotal)

  const handleAddToCart = (burger: Burger) => {
    addBurgerToCart(burger);

    const handleUndoAction = () => removeBurgerToCart(burger.id);

    toastMessage({
      b: burger,
      onClick: handleUndoAction,
    });
  };

  return (
    <div className="flex flex-col gap-10">
      {allBurgers &&
        allBurgers.map((b, index) => (
          <CardBurger key={index} b={b} onCreate={handleAddToCart} />
        ))}
      <Separator />
      <BurgerFooter priceTotal={priceTotal} onClean={() => clean()} />
    </div>
  );
};
