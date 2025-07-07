"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { burgers } from "@/lib/burger";
import { Burger } from "@/types/burger";
import { CaroulselBurgerCard } from "./caroulselBurgerCard";

export const CarouselBurger = () => {
  const [allBurgers] = useState<Burger[]>(burgers || []);
  // 1 2 5 6
  return (
    <div className="w-full flex flex-col gap-3 justify-center">
      <h2 className="text-3xl text-center tracking-short text-(--contrast) font-semibold ">
        Favoritos da casa
      </h2>
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {allBurgers && [1, 2, 5, 6].map((i) => {
            const b = allBurgers.find((b) => b.id === i);
            if(b) return (
              <CarouselItem key={`${b?.name}-favorite`} className="sm:basis-1/2 md:basis-1/3">
                <CaroulselBurgerCard
                  description={b.description}
                  img={b.imgUrl}
                  name={b.name}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
