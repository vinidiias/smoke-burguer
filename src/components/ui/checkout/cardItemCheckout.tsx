import { Cart } from "@/types/cart";
import Image from "next/image";

export const CardItemCheckout = ({ item }: { item: Cart }) => {
  const value = Number(item.price * item.quant).toFixed(2);

  return (
    <div
      className="flex justify-between items-center"
      key={`${item.name} - cart`}
    >
      <div className="flex-1">
        <h3 className="text-sm">{item.quant} x</h3>
      </div>
      <div className="flex-2">
        <Image
          src={item.imgUrl}
          alt={`${item.name} - image`}
          className="w-15 h-15 rounded-xl"
        />
      </div>
      <div className="flex-2">
        <h3 className="text-sm">{item.name}</h3>
      </div>
      <div className="flex-2">
        <h3 className="text-sm">R$ {value}</h3>
      </div>
    </div>
  );
};
