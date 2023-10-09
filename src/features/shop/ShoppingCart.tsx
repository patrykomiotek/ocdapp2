import { ProductDto } from "./types";

type Props = {
  products: ProductDto[];
  onRemove: (index: number) => void;
};

export const ShoppingCart = ({ products, onRemove }: Props) => {
  const handleRemove = (index: number) => () => {
    onRemove(index);
  };

  return (
    <div>
      <h2>Products in basket</h2>
      {products.map((elem, index) => (
        <div key={index}>
          <span>
            {elem.name} {elem.price}
          </span>
          <span>
            <button onClick={handleRemove(index)}>Remove</button>
          </span>
        </div>
      ))}
    </div>
  );
};
