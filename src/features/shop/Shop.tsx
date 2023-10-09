import { useId, useState } from "react";
import { Product } from "./Product";
import type { ProductDto } from "./types";
import { ShoppingCart } from ".";

export const Shop = () => {
  // const id = useId();
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
    const modifiedProduct = { ...product };
    modifiedProduct.name = `${modifiedProduct.name} (${Math.random()})`;

    setProducts((values) => [...values, modifiedProduct]);
    // structuredClone
  };

  const handleRemove = (index: number) => {
    const newList = [...products];
    newList.splice(index, 1);
    setProducts(newList);
  };

  return (
    <div>
      <Product product={product} onAddToBasket={handleAddToBasket(product)} />
      {/* <Product product={product} onAddToBasket={() => handleAddToBasket(product)} /> */}
      <ShoppingCart products={products} onRemove={handleRemove} />
    </div>
  );
};
