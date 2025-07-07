import { getCartItems, getPriceTotal } from "@/atoms/cartAtom";
import { Props } from ".";
import { useAtomValue } from "jotai";
import { useFormContext } from "react-hook-form";
import { IFormValues } from "@/types/form";
import { generateMessageWhatsapp } from "@/lib/generateMessageWpp";
import { Button } from "../button";
import { InfoFooter } from "./infoFooter";
import { Separator } from "@/components/ui/separator";

export const FooterCheckout = ({
  currentPage,
  nextPage,
  previousPage,
  onClose,
}: Props) => {
  const priceTotalAtom = useAtomValue<number>(getPriceTotal);
  const cartItems = useAtomValue(getCartItems);
  const { handleSubmit: handleSubmitForm } = useFormContext<IFormValues>();

  const submit = (data: IFormValues) => {
    const getMessageWpp = generateMessageWhatsapp({
      items: cartItems,
      address: data.address,
      description: data.description,
      payment: data.payment,
      priceTotal: priceTotalAtom,
    });

    window.open(getMessageWpp, "_blank");
  };

  const handleClick = currentPage === 0 ? onClose : previousPage;
  const handleSubmit = currentPage === 0 ? nextPage : handleSubmitForm(submit);

  const typeBtn = currentPage === 0 ? "button" : "submit";
  const textBtn = currentPage === 0 ? "Continuar Comprando" : "Revisar Pedido";
  const textBtn2 = currentPage === 0 ? "Próximo" : "Finalizar Pedido";

  return (
    <>
      <Separator />
      <InfoFooter priceTotal={priceTotalAtom} />
      <Separator />
      <div className="flex justify-between py-1">
        <Button
          variant="secondary"
          className="font-medium rounded-full"
          onClick={handleClick}
          type="button"
        >
          {textBtn}
        </Button>
        <Button
          variant="contrast"
          className="font-medium"
          onClick={handleSubmit}
          type={typeBtn}
        >
          {textBtn2}
        </Button>
      </div>
    </>
  );
};
