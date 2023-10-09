import { useShopContext } from "./ShopContext";

export const ShoppingCart = () => {
  const context = useShopContext();

  const products = context.products;

  const handleRemove = (index: number) => () => {
    context.remove(index);
  };

  return (
    <div>
      <h2>Products in basket</h2>
      {products.map((elem, index) => (
        <div key={index}>
          <span>
            {elem.name} {elem.price}
          </span>
          <span>
            <button onClick={handleRemove(index)}>Remove</button>
          </span>
        </div>
      ))}
    </div>
  );
};
