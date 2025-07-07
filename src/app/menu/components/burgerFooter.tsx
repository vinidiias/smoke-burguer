import { openCheckoutAtom } from "@/atoms/openCheckoutAtom";
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator";
import { useAtom } from "jotai";

export const BurgerFooter = ({
  priceTotal,
  onClean,
}: {
  priceTotal: number;
  onClean: () => void;
}) => {
  const [, setOpenCheckout] = useAtom(openCheckoutAtom);

  return (
    <div className="flex items-center justify-between">
      <Button
        variant="secondary"
        className="rounded-full text-xs font-medium"
        onClick={onClean}
      >
        Limpar carrinho
      </Button>
      <div className="flex items-center h-8 space-x-3">
        <h5 className="text-md font-normal">R$ {priceTotal && priceTotal}</h5>
        <Separator className="h-10" orientation="vertical" />
        <Button
          variant="contrast"
          className="text-xs font-medium"
          onClick={() => setOpenCheckout(true)}
        >
          Finalizar
        </Button>
      </div>
    </div>
  );
};