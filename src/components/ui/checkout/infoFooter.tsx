export const InfoFooter = ({ priceTotal }: { priceTotal: number }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h3 className="text-sm">Subtotal:</h3>
        <h3 className="text-sm">+ R$ {priceTotal}</h3>
      </div>
      <div className="flex justify-between">
        <h3 className="text-sm">Frete: </h3>
        <h3 className="text-sm">- R$ 0</h3>
      </div>
      <div className="flex justify-between">
        <h3 className="text-sm">Total:</h3>
        <h3 className="text-sm">R$ {priceTotal}</h3>
      </div>
    </div>
  );
};
