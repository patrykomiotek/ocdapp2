import { Product } from "./Product";
import type { ProductDto } from "./types";
import { ShoppingCart } from ".";
import { ShopContextProvider } from "./ShopContext";

export const Shop = () => {
  const product: ProductDto = {
    name: "Tenisówki",
    price: 100,
  };

  return (
    <div>
      <ShopContextProvider>
        <Product product={product} />
        {/* <Product product={product} onAddToBasket={() => handleAddToBasket(product)} /> */}
        <ShoppingCart />
      </ShopContextProvider>
    </div>
  );
};
