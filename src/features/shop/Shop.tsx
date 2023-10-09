import type { ProductDto } from "./types";
import { Link } from "react-router-dom";
import { addProductToBasket, fetchProducts } from "./airtable";
import { useQuery } from "@tanstack/react-query";

export const Shop = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery(["products"], fetchProducts);

  const handleAddToBasket = (id: ProductDto["id"]) => () => {
    void addProductToBasket(id);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

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
