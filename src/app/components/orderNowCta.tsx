import { Button } from "@/components/ui/button";
import { ContainerHome } from "./containerHome";

export const OrderNowCta = () => {
  return (
    <ContainerHome
      title="Pronto para experimentar o melhor hambúrguer defumado da cidade?"
      textAlign="center"
      color="inherit"
    >
      <div className="flex flex-col items-center">
        <Button variant="contrast">Ver Cardápio</Button>
      </div>
    </ContainerHome>
  );
};
