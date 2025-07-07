
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BurgersList } from "./components/burgerList";
import { ContainerMenuContent } from "./components/containerMenuContent";

export default function Menu() {
  return (
    <section className="w-full min-h-full px-5">
      <div className="flex flex-col gap-8 md:max-w-250 mx-auto py-10 h-full">
        <h1 className="text-3xl font-medium tracking-tighter">Peça agora</h1>
        <div className="h-full">
          <Tabs className="gap-0 h-full" defaultValue="burguers">
            <TabsList className="bg-transparent gap-5">
              {["Burguers", "Bebidas"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  className="border-none dark:data-[state=active]:bg-transparent"
                  value={tab.toLowerCase()}
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
            <Separator />
            <TabsContent className="h-full mt-5" value="burguers">
              <ContainerMenuContent title="Burguers">
                <BurgersList />
              </ContainerMenuContent>
            </TabsContent>
            <TabsContent className="h-full mt-5" value="bebidas">
              <ContainerMenuContent title="Bebidas">
                <div></div>
              </ContainerMenuContent>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
