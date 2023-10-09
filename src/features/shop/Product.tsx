// import React from 'react'; // React.createElement
import { useShopContext } from "./ShopContext";
import type { ProductDto } from "./types";

type Props = Readonly<{
  product: ProductDto;
}>;

export const Product = ({ product }: Props) => {
  const context = useShopContext();

  return (
    <div>
      <span>
        {product.name} {product.price}
        <button onClick={() => context.addToBasket(product)}>
          Add to basket
        </button>
      </span>
    </div>
  );
};
