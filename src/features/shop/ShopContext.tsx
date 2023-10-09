// 1️⃣ context
// 2️⃣ Provider
// 3️⃣ custom hook with context data

import { createContext, useContext, useState } from "react";
import { ProductDto } from "./types";

interface ShopContextType {
  products: ProductDto[];
  addToBasket: (product: ProductDto) => void;
  remove: (index: number) => void;
}

const ShopContext = createContext<ShopContextType | null>(null);

export const ShopContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // TODO: addToBasket, remove and fetching data should use airtable
  // TODO: add useEffect to fetch data
  const [products, setProducts] = useState<ProductDto[]>([]);

  const addToBasket = (product: ProductDto) => {
    const modifiedProduct = { ...product };
    modifiedProduct.name = `${modifiedProduct.name} (${Math.random()})`;

    setProducts((values) => [...values, modifiedProduct]);
  };

  const remove = (index: number) => {
    const newList = [...products];
    newList.splice(index, 1);
    setProducts(newList);
  };

  return (
    <ShopContext.Provider value={{ products, addToBasket, remove }}>
      {children}
    </ShopContext.Provider>
  );
};

// ShopContextProvider.displayName = "Trololo";

// eslint-disable-next-line react-refresh/only-export-components
export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error(
      "Oh no! You need to wrap component inside ShopContextProvider"
    );
  }
  return context;
};
