// import React from 'react'; // React.createElement

type Money = {
  value: number;
  currency: "PLN" | "EURO" | "PESOS";
};

type Product = {
  name: string;
  price: number;
};

type Props = {
  product: Product;
  addToBasket: (product: Product) => void;
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
