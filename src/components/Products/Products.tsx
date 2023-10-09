import { useApi } from "@hooks/useApi";

interface ProductsDto {
  id: string;
  fields: {
    name: string;
    description: string;
    price: number;
  };
}

interface DataResponse {
  records: ProductsDto[];
}

export const Products = () => {
  const { data, isLoading, isError } = useApi<DataResponse>("/products");
  // const { data, isLoading, isError } = useApi<DataResponse>(fetchProducts);

  // const { data, isLoading, isError } = useApi<ProductsDto[]>('/products');
  // const { data, isLoading, isError } = useApi<CategoriesDto[]>('/categories');
  // const { data, isLoading, isError } = useApi<ProductDto>('/product/123');

  return (
    <div>
      <h1>Products</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oh no!</p>}

      {data?.records.map((elem) => (
        <div key={elem.id}>
          {elem.fields.name} {elem.fields.price}
        </div>
      ))}
    </div>
  );
};
