// import React from 'react'; // React.createElement
import type { ProductDto } from "./types";

type Props = {
  product: ProductDto;
  addToBasket: (product: ProductDto) => void;
};

export const Product = ({ product, addToBasket }: Props) => {
  return (
    <div>
      <span>
        {product.name} {product.price}
        <button onClick={() => addToBasket(product)}>Add to basket</button>
      </span>
    </div>
  );
};
