import { Cart } from "@/types/cart";

interface Props {
  items: Cart[];
  description: string;
  address: string;
  payment: string;
  priceTotal: number;
}

export const generateMessageWhatsapp = ({
  items,
  address,
  description,
  payment,
  priceTotal,
}: Props): string => {
  const itemsMessage: string = items
    .map((i) => `* ${i.quant}x ${i.name} - R$ ${i.price}`)
    .join("\n");

  const fullMessage =
    "*** NOVO PEDIDO ***\n" +
    "----------------------------\n" +
    "*Itens:*\n" +
    itemsMessage +
    "\n*Endereço:*\n" +
    address +
    "\n*Descrição:*\n" +
    description +
    "\n*Forma de Pagamento:*\n" +
    payment +
    "\n*Preço Total:*\n" +
    `R$ ${priceTotal}\n` +
    "----------------------------";
  const encodedMessage = encodeURIComponent(fullMessage);

  return `https://wa.me/5545991330882?text=${encodedMessage}`;
};
