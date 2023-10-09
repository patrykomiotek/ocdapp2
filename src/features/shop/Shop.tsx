import { Product } from "./Product";
import type { ProductDto } from "./types";
import { ShoppingCart } from ".";
import { ShopContextProvider } from "./ShopContext";
import { Link } from "react-router-dom";

export const Shop = () => {
  const product: ProductDto = {
    name: "Tenisówki",
    price: 100,
  };

  return (
    <div>
      <Product product={product} />
      {/* <Product product={product} onAddToBasket={() => handleAddToBasket(product)} /> */}
      <Link to="/basket">Go to basket</Link>
    </div>
  );
};
