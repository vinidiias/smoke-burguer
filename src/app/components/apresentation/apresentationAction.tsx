import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const ApresentationAction = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center gap-3">
      <Button
        variant="contrast"
        onClick={() => router.push("/menu", { scroll: true })}
      >
        Ver Cardápio
      </Button>
      <Button
        variant="secondary"
        className="text-sm font-medium rounded-full"
        onClick={() => router.push("/", { scroll: true })}
      >
        Localização
      </Button>
    </div>
  );
};
