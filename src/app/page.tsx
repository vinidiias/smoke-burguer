'use client'
import { About } from "./components/about";
import { Apresentation } from "./components/apresentation/apresentation";
import { CarouselBurger } from "./components/carousel/caroulselBurger";
import { OrderNowCta } from "./components/orderNowCta";

export default function Home() {
  return (
    <section className="h-auto w-full @container">
      <div className="flex flex-col w-full @md:max-w-250 mx-auto gap-30 py-10">
        <Apresentation />
        <CarouselBurger />
        <About />
        <OrderNowCta />
      </div>
    </section>
  );
}
