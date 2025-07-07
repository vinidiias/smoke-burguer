import { Burger } from "@/types/burger";
import { toast } from "sonner";

export const toastMessage = ({
  b,
  onClick,
}: {
  b: Burger;
  onClick: () => void;
}) => {
  toast(`${b.name} adicionado ao carrinho!`, {
    description: `+ R$ ${b.price}`,
    action: {
      label: "Desfazer",
      onClick: onClick,
    },
  });
};