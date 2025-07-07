import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

export const CaroulselBurgerCard = ({ name, description, img }: { name: string, description: string, img: StaticImageData }) => {
    return (
      <Card className="border-none bg-transparent">
        <CardContent className="flex gap-2 justify-center">
          <div className="w-[300px]">
            <Image
              src={img ?? ""}
              alt={name ?? ""}
              className="rounded-4xl mb-2"
            />
            <div className="text-justify">
              <h3 className="text-md text-(--contrast) font-medium">{name}</h3>
              <h4 className="text-sm font-light">{description}</h4>
            </div>
          </div>
        </CardContent>
      </Card>
    );
}