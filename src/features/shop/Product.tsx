// import React from 'react'; // React.createElement
import type { Product as ProductType } from "./types";

type Props = {
  product: ProductType;
  addToBasket: (product: ProductType) => void;
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
