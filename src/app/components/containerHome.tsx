import { ReactElement } from "react"

interface ContainerHome {
    children: ReactElement;
    title: string
    textAlign?: 'center' | 'left' | 'right' | 'justify'
    color?: 'inherit',
}

export const ContainerHome = ({
  children,
  title,
  textAlign,
  color,
}: ContainerHome) => {
  return (
    <div className="w-full flex flex-col justify-center gap-3 max-sm:px-5">
      <h2
        className={`text-3xl font-medium ${
          textAlign ? `text-${textAlign}` : "text-start"
        } max-sm:text-center tracking-short ${!color ? "text-(--contrast)" : ""}`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
};