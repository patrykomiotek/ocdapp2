import { Product } from "./Product";
import type { ProductDto } from "./types";
import { ShoppingCart } from ".";
import { ShopContextProvider } from "./ShopContext";
import { Link } from "react-router-dom";
import { MouseEventHandler, useEffect, useState } from "react";
import { addProductToBasket, fetchProducts } from "./airtable";

export const Shop = () => {
  const [products, setProducts] = useState<ProductDto[] | null>(null);

  useEffect(() => {
    // fetch
    // .then -> (response, reject) [new Promise((resolve, reject)]
    // .then -> (response, reject)

    const loadData = async () => {
      try {
        const products = await fetchProducts();

        console.log({ products });
        setProducts(products);
      } catch {
        /* empty */
      }
    };
    void loadData();
  }, []);

  const handleAddToBasket = (id: ProductDto["id"]) => () => {
    void addProductToBasket(id);
  };

  return (
    <div>
      {/* <Product product={product} /> */}
      {/* <Product product={product} onAddToBasket={() => handleAddToBasket(product)} /> */}
      <Link to="/basket">Go to basket</Link>

      {products?.map((elem) => (
        <div key={elem.id}>
          <span>
            {elem.name} {elem.price} zł{" "}
            <button onClick={handleAddToBasket(elem.id)}>Add to basket</button>
          </span>
        </div>
      ))}
    </div>
  );
};
