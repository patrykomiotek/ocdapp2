import { useState } from "react";
import { Product } from "./Product";
import type { ProductDto } from "./types";

export const Shop = () => {
  const [products, setProducts] = useState<ProductDto[]>([]);

  const product: ProductDto = {
    name: "Tenisówki",
    price: 100,
  };

  const handleAddToBasket = (product: ProductDto) => () => {
    // products.push(product)
    // []
    // {}

    // setProducts([...products, product]);
    setProducts((values) => [...values, product]);
    // structuredClone
  };

  return (
    <div>
      <Product product={product} onAddToBasket={handleAddToBasket(product)} />
      {/* <Product product={product} onAddToBasket={() => handleAddToBasket(product)} /> */}
    </div>
  );
};
