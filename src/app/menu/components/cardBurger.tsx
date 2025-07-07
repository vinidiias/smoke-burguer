import { Button } from "@/components/ui/button";
import { Burger } from "@/types/burger";
import Image from "next/image";

export const CardBurger = ({
  b,
  onCreate,
}: {
  b: Burger;
  onCreate: (b: Burger) => void;
}) => {
  return (
    <div
      key={`${b.name}-${b.id}`}
      className="flex items-center justify-center md:justify-between flex-wrap-reverse max-sm:gap-2"
    >
      <div className="flex flex-col gap-4 items-center md:items-start">
        <div className="w-full sm:w-120 text-center md:text-start">
          <h3 className="text-md font-medium">{b.name}</h3>
          <h4 className="text-sm font-light">{b.description}</h4>
        </div>
        <Button
          variant="contrast"
          className="w-[min-content] text-xs font-medium"
          onClick={() => onCreate(b)}
        >
          Adicionar
        </Button>
      </div>
      <div>
        <Image
          src={b.imgUrl}
          className="w-50 h-40 rounded-xl object-cover"
          alt={`${b.name} - image`}
        />
      </div>
    </div>
  );
};
