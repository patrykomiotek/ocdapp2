import Airtable, { Records, base } from "airtable";
import { ProductDto, ProductSchema } from "./types";

Airtable.configure({
  apiKey:
    "patVQ864y6eGr1CkQ.760719abde62320306c65daff180b15fdc943d7cbf5301dc552175a39969fa4f",
});

export const fetchProducts = (): Promise<ProductDto[]> => {
  return base("appJ0votvrhmT0Sbq")
    .table("products")
    .select({})
    .all()
    .then(
      (records) =>
        records.flatMap<ProductDto>((elem) => {
          // const product = {
          //   name: elem.fields.name,
          //   price: elem.fields.price || 0,
          // };
          try {
            const parsedProducts = ProductSchema.parse({
              id: elem.id,
              ...elem.fields,
            });
            return [parsedProducts];
          } catch {
            /* empty */
            console.error("invalid: ", elem);
            return [];
          }
        })

      // records.map<ProductDto>((elem) => {
      //   const product = {
      //     name: elem.fields.name as string,
      //     price: (elem.fields.price as number) || 0,
      //   };
      //   try {
      //     const parsedProduct = ProductSchema.parse(product);
      //     return parsedProduct;
      //   } catch {
      //     /* empty */
      //     return;
      //   }
      // })
    );
};
