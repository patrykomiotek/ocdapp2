import z from "zod";

enum Currency {
  PLN = "PLN",
  EURO = "EURO",
  PESOS = "PESOS",
}

// export type Money = {
//   value: number;
//   currency: Currency;
// };

const Money = z.object({
  value: z.number(),
  currency: z.nativeEnum(Currency),
});

export type MoneyDto = z.infer<typeof Money>;

// export type Product = {
//   name: string;
//   price: number;
// };
// z.object
// z.infer -> ProductDto

// extendable
export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().positive(),
});

export type ProductDto = z.infer<typeof ProductSchema>;
