// import React from 'react'; // React.createElement
import type { ProductDto } from "./types";

type Props = Readonly<{
  product: ProductDto;
  onAddToBasket: (product: ProductDto) => void;
}>;

export const Product = ({ product, onAddToBasket }: Props) => {
  // product = {};

  return (
    <div>
      <span>
        {product.name} {product.price}
        <button onClick={() => onAddToBasket(product)}>Add to basket</button>
      </span>
    </div>
  );
};
