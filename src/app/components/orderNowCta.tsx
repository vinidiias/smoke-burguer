import { Button } from "@/components/ui/button";
import { ContainerHome } from "./containerHome";
import { useRouter } from "next/navigation";

export const OrderNowCta = () => {
  const router = useRouter();
  return (
    <ContainerHome
      title="Pronto para experimentar o melhor hambúrguer defumado da cidade?"
      textAlign="center"
      color="inherit"
    >
      <div className="flex flex-col items-center">
        <Button
          variant="contrast"
          onClick={() => router.push("/menu", { scroll: true })}
        >
          Ver Cardápio
        </Button>
      </div>
    </ContainerHome>
  );
};
