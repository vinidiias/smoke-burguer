"use client";
import { ApresentationAction } from "./apresentationAction";
import { TextApresentation } from "./textApresentation";

export const Apresentation = () => {
  return (
    <div className="flex flex-col justify-center md:px-15 min-h-150 bg-[url('/defumador.png')] bg-cover bg-center bg-no-repeat w-full md:rounded-xl">
      <div className="text-start flex flex-col gap-4">
        <TextApresentation />
        <ApresentationAction />
      </div>
    </div>
  );
};
