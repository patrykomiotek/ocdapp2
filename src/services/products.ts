import axios from "axios";

const BASE_URL = "https://api.airtable.com/v0/appJ0votvrhmT0Sbq";
const TOKEN =
  "Bearer patVQ864y6eGr1CkQ.760719abde62320306c65daff180b15fdc943d7cbf5301dc552175a39969fa4f";

export interface CreateProductDto {
  name: string;
  price: number;
  description: string;
}

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: TOKEN,
    "content-type": "application/json",
  },
});

export const createProduct = (data: CreateProductDto): Promise<Response> => {
  return api.post<Product>(`/products`, {
    records: data,
  });

  return fetch(`${BASE_URL}/products`, {
    headers: {
      Authorization: TOKEN,
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      records: data,
    }),
  });
};
