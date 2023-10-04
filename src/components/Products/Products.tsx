import { useEffect, useState } from "react";

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
  const [data, setData] = useState<ProductsDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    void fetch("https://api.airtable.com/v0/appJ0votvrhmT0Sbq/products", {
      headers: {
        Authorization: `Bearer patVQ864y6eGr1CkQ.760719abde62320306c65daff180b15fdc943d7cbf5301dc552175a39969fa4f`,
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        setIsError(true);
        throw new Error("Oh no!");
      })
      .then((data: DataResponse) => {
        console.log(data);
        setData(data.records);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oh no!</p>}

      {data.map((elem) => (
        <div key={elem.id}>
          {elem.fields.name} {elem.fields.price}
        </div>
      ))}
    </div>
  );
};
