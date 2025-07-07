import { useAtomValue } from "jotai";
import { Props } from ".";
import { Cart } from "@/types/cart";
import { useFormContext } from "react-hook-form";
import { getCartItems } from "@/atoms/cartAtom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";
import { renderInputs } from "@/lib/renderInputs";
import { IFields } from "@/types/fields";
import { CardItemCheckout } from "./cardItemCheckout";
import { Fragment } from "react";
import { Separator } from "../separator";

const fieldsCheckout: IFields[] = [
  {
    label: "Descrição (opcional)",
    name: "description",
    placeholder: "Escreva alguma observação",
    type: "text",
  },
  {
    label: "Endereço",
    name: "address",
    placeholder: "Endereço de entrega",
    type: "text",
  },
  {
    label: "Forma de Pagamento",
    name: "payment",
    placeholder: "Selecione a forma de pagamento",
    type: "select",
    options: [
      { label: "Dinheiro", value: "Dinheiro" },
      { label: "Pix", value: "Pix" },
      { label: "Débito", value: "Débito" },
      { label: "Crédito", value: "Crédito" },
    ],
  },
];

export const TabsCheckout = ({ currentPage }: Props) => {
  const cartItems: Cart[] = useAtomValue(getCartItems);
  const { control } = useFormContext()

  return (
    <Tabs defaultValue="0" value={currentPage.toString()}>
      <TabsList className="bg-transparent mx-auto">
        <TabsTrigger value="0" className="border-none">
          Itens
        </TabsTrigger>
        <TabsTrigger value="1" className="border-none">
          Informações
        </TabsTrigger>
      </TabsList>
      <TabsContent value="0">
        <div className="flex flex-col gap-5">
          {cartItems &&
            cartItems.length > 0 &&
            cartItems.map((p) => (
              <CardItemCheckout key={`${p.name} - cart`} item={p} />
            ))}
        </div>
      </TabsContent>
      <TabsContent value="1">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5 mt-5 bg-[#212121]/20 p-5 rounded-md">
          {fieldsCheckout.map((field) => (
            <Fragment key={field.name}>
              {renderInputs(field, control)}
              <Separator />
            </Fragment>
          ))}
        </form>
      </TabsContent>
    </Tabs>
  );
};