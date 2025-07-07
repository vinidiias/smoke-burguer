interface ContainerMenuPropsContent {
    children: React.ReactNode;
    title: string
}

export const ContainerMenuContent: React.FC<ContainerMenuPropsContent> = ({
  children,
  title,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-medium tracking-tight">{title}</h2>
      {children}
    </div>
  );
};